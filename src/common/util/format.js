/**
 * 格式化函数
 * 提供数据格式化服务，目前支持**数字**，**货币**，**百分比**的格式化，接受两个参数，输入数据和格式化的pattern，基本规则是 *格式化类型_参数1_参数2* ，pattern详细书写规则如下：

 - 数字：number_精度（数字）_是否保留+-号（数字0，1）_是否*100 _是否除100
 - 货币：currency_货币单位($,￥等)
 - 百分比:percent_精度_是否保留+-号_是否*100_是否除100

 * @param  {[type]} input 输入字符串
 * @param  {[type]} param [description]
 * @return {[type]}       [description]
 */

/* eslint-disable */
export default function(input, param) {
    var tmpPercentCharactor = '%'
    /**
     * 将数据转成千分位
     * @param num 要转换的数字，可为整数或者浮点数
     * @param dec 要保留的小数位
     * @returns {string}
     */
    function formatThousands(num, dec) {
        num = Number(num)
        if (dec) {
            num = num.toFixed(dec)
        }
        return (num + '').replace(/^[-\+]?\d+/, function(v) {
            return v.replace(/\d{1,3}(?=(\d{3})+$)/g, '$&,')
        })
    }

    var formatters = {
        number: function(input, param) {
            if (input.toString().indexOf(',') > -1 || isNaN(input)) {
                return input
            }
            input = parseFloat(input)
            
            param = param || ''
            var tmp = param.split('_')
            if (tmp[2] && parseInt(tmp[2])) {
                input = input * 100
            }
            if (tmp[3] && parseInt(tmp[3])) {
                input = input / 100
            }
            var res = formatThousands(input, tmp[0] || 0)
            if (parseInt(tmp[1])) {
                input > 0 && (res = '+' + res)
            }
            return res
        },

        percent: function(input, param) {
            if (isNaN(input)) {
                return input
            }
            // var multiply100
            // if (param && (multiply100 = param.split('_')[2]) && parseInt(multiply100)) {
            //     input = parseFloat(input) * 100
            // }
            // if (param && param.split('_')[3] && parseInt(param.split('_')[3])) {
            //     input = parseFloat(input) / 100
            // }
            return this.number(input, param) + tmpPercentCharactor
        },

        date: function(input, param) {
            if (!param) {
                return formatDate(input, tmpDateFormat)
            } else {
                return formatDate(input, param)
            }
        },

        currency: function(input, param) {
            var tmp = param.split('_')[1] || '￥'
            //如果传过来的数据带有金钱符号 做容错处理
            return input.toString().indexOf(tmp) >= 0 ? input : tmp + this.number(input, param)
        },

        limitTo: function(str, n) {
            if (!param) return input

            if (!str) {
                return ''
            }
            var ilen = str.length
            if (ilen * 2 <= n) return str
            n -= 3
            var i = 0
            while (i < ilen && n > 0) {
                if (escape(str.charAt(i)).length > 4) n--
                n--
                i++
            }
            if (n > 0 || (i == ilen && n == 0)) return str
            return str.substring(0, i) + '...'
        },

        typeCast: function(input, param) {
            switch (param) {
                case 'i':
                    return parseInt(input)
                case 'f':
                    return parseFloat(input)
                case 's':
                    if (input instanceof Object) return JSON.stringify(input)
                    return input + ''
                case 'o':
                    return (input && JSON.parse(input)) || input
                case 'b':
                    if (input == 'true') return true
                    else if (
                        input == 'false' ||
                        input == '0' ||
                        input == 'undefined' ||
                        input == 'null'
                    )
                        return false
                    else return !!input
                default:
                    return input
                    break
            }
        }
    }

    function valueFormatter(input, param) {
        if (input === null || input === '' || input === undefined) {
            return input
        }
        var index = (param || '').indexOf('_')

        if (index == -1) {
            var type = param
            param = null
        } else {
            var type = param.substr(0, index)
            param = param.substr(index + 1)
        }

        if (formatters[type]) {
            return formatters[type](input, param)
        }

        return input
    }

    return valueFormatter(input, param)
}
