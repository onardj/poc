(window.webpackJsonp=window.webpackJsonp||[]).push([[1069],{wj4K:function(e,n,r){"use strict";r.r(n),r.d(n,"csLocale",(function(){return o}));var t=r("HPA8"),s="leden_\xfanor_b\u0159ezen_duben_kv\u011bten_\u010derven_\u010dervenec_srpen_z\xe1\u0159\xed_\u0159\xedjen_listopad_prosinec".split("_"),a="led_\xfano_b\u0159e_dub_kv\u011b_\u010dvn_\u010dvc_srp_z\xe1\u0159_\u0159\xedj_lis_pro".split("_");function u(e){return e>1&&e<5&&1!=~~(e/10)}function d(e,n,r,t){var s=e+" ";switch(r){case"s":return n||t?"p\xe1r sekund":"p\xe1r sekundami";case"ss":return n||t?s+(u(e)?"sekundy":"sekund"):s+"sekundami";case"m":return n?"minuta":t?"minutu":"minutou";case"mm":return n||t?s+(u(e)?"minuty":"minut"):s+"minutami";case"h":return n?"hodina":t?"hodinu":"hodinou";case"hh":return n||t?s+(u(e)?"hodiny":"hodin"):s+"hodinami";case"d":return n||t?"den":"dnem";case"dd":return n||t?s+(u(e)?"dny":"dn\xed"):s+"dny";case"M":return n||t?"m\u011bs\xedc":"m\u011bs\xedcem";case"MM":return n||t?s+(u(e)?"m\u011bs\xedce":"m\u011bs\xedc\u016f"):s+"m\u011bs\xedci";case"y":return n||t?"rok":"rokem";case"yy":return n||t?s+(u(e)?"roky":"let"):s+"lety"}}var o={abbr:"cs",months:s,monthsShort:a,monthsParse:function(e,n){var r,t=[];for(r=0;r<12;r++)t[r]=new RegExp("^"+e[r]+"$|^"+n[r]+"$","i");return t}(s,a),shortMonthsParse:function(e){var n,r=[];for(n=0;n<12;n++)r[n]=new RegExp("^"+e[n]+"$","i");return r}(a),longMonthsParse:function(e){var n,r=[];for(n=0;n<12;n++)r[n]=new RegExp("^"+e[n]+"$","i");return r}(s),weekdays:"ned\u011ble_pond\u011bl\xed_\xfater\xfd_st\u0159eda_\u010dtvrtek_p\xe1tek_sobota".split("_"),weekdaysShort:"ne_po_\xfat_st_\u010dt_p\xe1_so".split("_"),weekdaysMin:"ne_po_\xfat_st_\u010dt_p\xe1_so".split("_"),longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm",LLLL:"dddd D. MMMM YYYY H:mm",l:"D. M. YYYY"},calendar:{sameDay:"[dnes v] LT",nextDay:"[z\xedtra v] LT",nextWeek:function(e){switch(Object(t.a)(e)){case 0:return"[v ned\u011bli v] LT";case 1:case 2:return"[v] dddd [v] LT";case 3:return"[ve st\u0159edu v] LT";case 4:return"[ve \u010dtvrtek v] LT";case 5:return"[v p\xe1tek v] LT";case 6:return"[v sobotu v] LT"}},lastDay:"[v\u010dera v] LT",lastWeek:function(e){switch(Object(t.a)(e)){case 0:return"[minulou ned\u011bli v] LT";case 1:case 2:return"[minul\xe9] dddd [v] LT";case 3:return"[minulou st\u0159edu v] LT";case 4:case 5:return"[minul\xfd] dddd [v] LT";case 6:return"[minulou sobotu v] LT"}},sameElse:"L"},relativeTime:{future:"za %s",past:"p\u0159ed %s",s:d,ss:d,m:d,mm:d,h:d,hh:d,d:d,dd:d,M:d,MM:d,y:d,yy:d},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}}}}]);