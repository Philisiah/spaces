(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-vendors~4f1568c2"],{ada2:function(_,e,t){(function(_,e){e(t("c1df"))})(0,function(_){"use strict";function e(_,e){var t=_.split("_");return e%10===1&&e%100!==11?t[0]:e%10>=2&&e%10<=4&&(e%100<10||e%100>=20)?t[1]:t[2]}function t(_,t,n){var s={ss:t?"секунда_секунди_секунд":"секунду_секунди_секунд",mm:t?"хвилина_хвилини_хвилин":"хвилину_хвилини_хвилин",hh:t?"година_години_годин":"годину_години_годин",dd:"день_дні_днів",MM:"місяць_місяці_місяців",yy:"рік_роки_років"};return"m"===n?t?"хвилина":"хвилину":"h"===n?t?"година":"годину":_+" "+e(s[n],+_)}function n(_,e){var t={nominative:"неділя_понеділок_вівторок_середа_четвер_п’ятниця_субота".split("_"),accusative:"неділю_понеділок_вівторок_середу_четвер_п’ятницю_суботу".split("_"),genitive:"неділі_понеділка_вівторка_середи_четверга_п’ятниці_суботи".split("_")};if(!0===_)return t["nominative"].slice(1,7).concat(t["nominative"].slice(0,1));if(!_)return t["nominative"];var n=/(\[[ВвУу]\]) ?dddd/.test(e)?"accusative":/\[?(?:минулої|наступної)? ?\] ?dddd/.test(e)?"genitive":"nominative";return t[n][_.day()]}function s(_){return function(){return _+"о"+(11===this.hours()?"б":"")+"] LT"}}var a=_.defineLocale("uk",{months:{format:"січня_лютого_березня_квітня_травня_червня_липня_серпня_вересня_жовтня_листопада_грудня".split("_"),standalone:"січень_лютий_березень_квітень_травень_червень_липень_серпень_вересень_жовтень_листопад_грудень".split("_")},monthsShort:"січ_лют_бер_квіт_трав_черв_лип_серп_вер_жовт_лист_груд".split("_"),weekdays:n,weekdaysShort:"нд_пн_вт_ср_чт_пт_сб".split("_"),weekdaysMin:"нд_пн_вт_ср_чт_пт_сб".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY р.",LLL:"D MMMM YYYY р., HH:mm",LLLL:"dddd, D MMMM YYYY р., HH:mm"},calendar:{sameDay:s("[Сьогодні "),nextDay:s("[Завтра "),lastDay:s("[Вчора "),nextWeek:s("[У] dddd ["),lastWeek:function(){switch(this.day()){case 0:case 3:case 5:case 6:return s("[Минулої] dddd [").call(this);case 1:case 2:case 4:return s("[Минулого] dddd [").call(this)}},sameElse:"L"},relativeTime:{future:"за %s",past:"%s тому",s:"декілька секунд",ss:t,m:t,mm:t,h:"годину",hh:t,d:"день",dd:t,M:"місяць",MM:t,y:"рік",yy:t},meridiemParse:/ночі|ранку|дня|вечора/,isPM:function(_){return/^(дня|вечора)$/.test(_)},meridiem:function(_,e,t){return _<4?"ночі":_<12?"ранку":_<17?"дня":"вечора"},dayOfMonthOrdinalParse:/\d{1,2}-(й|го)/,ordinal:function(_,e){switch(e){case"M":case"d":case"DDD":case"w":case"W":return _+"-й";case"D":return _+"-го";default:return _}},week:{dow:1,doy:7}});return a})}}]);
//# sourceMappingURL=chunk-vendors~4f1568c2.149c2f42.js.map