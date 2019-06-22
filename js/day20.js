$(function () {

    let arr3=[
            {name:"刘与",tel:"18636220195",py:"liuhaiy"},
            {name:"卫涛",tel:"18636554528",py: "weitao"},
            {name:"新博",tel:"17525364152",py:"xinbo"},
            {name:"张三",tel:"18636220195",py:"zangsan"},
            {name:"李四",tel:"18636554528",py: "lisi"},
            {name:"王五",tel:"17525364152",py:"wangwu"},
            {name:"赵六",tel:"17525364152",py:"zhaoliu"},
            {name:"周七",tel:"17525364152",py:"zhouqi"},
            {name:"日语",tel:"18636220195",py:"riyu"},
            {name:"样子",tel:"89789797897",py:"yangz"},
            {name:"刘海阳",tel:"18636220195",py:"liuhaiy"},
            {name:"涛",tel:"18636554528",py: "tao"},
            {name:"博",tel:"17525364152",py:"bo"},
            {name:"三",tel:"18636220195",py:"san"},
            {name:"四",tel:"18636554528",py: "si"},
            {name:"五",tel:"17525364152",py:"wu"},
            {name:"六",tel:"17525364152",py:"liu"},
            {name:"七",tel:"17525364152",py:"qi"},
            {name:"语",tel:"18636220195",py:"yu"},
            {name:"子",tel:"89789797897",py:"z"},
            {name:"洋",tel:"18636220195",py:"y"},
            {name:"卫",tel:"18636554528",py: "wei"},
            {name:"新",tel:"17525364152",py:"xin"},
            {name:"张三",tel:"18636220195",py:"zangsan"},
            {name:"李四",tel:"18636554528",py: "lisi"},
            {name:"王五",tel:"17525364152",py:"wangwu"},
            {name:"赵六",tel:"17525364152",py:"zhaoliu"},
            {name:"周七",tel:"17525364152",py:"zhouqi"},
            {name:"日语",tel:"18636220195",py:"riyu"},
            {name:"样子",tel:"89789797897",py:"yangz"},

            ];

    // 获取input框上的查询信
    // setInterval(function () {
    //     console.log($("input[name=seo]").val());
    //
    // },1000)
        let input=$("input[name=seo]")
    // console.log(input);
    input.on("click",function () {

        $(".rightChar").empty();
        $("section").empty();
        // 按照姓名查询
        let value=$(this).val();
        // console.log(value);
         let arr4=arr3.filter(elem=>elem.name.includes(value)||elem.py.includes(value)||elem.tel.includes(value));
        // arr3=arr3.filter(elem=>elem.py.includes(value))

         // console.log(arr3)
        process(arr4);


    })


    process(arr3);
    function process(arr){


    let obj={};
    arr.forEach(elem=>{

        let firstchar=elem.py.charAt(0).toUpperCase();
        if (!obj[firstchar]) {
            obj[firstchar]=[];
        }
        obj[firstchar].push(elem)
    })

    let html=``;
    let html1=``
    // console.log(obj)
    let arr1=Object.keys(obj).sort();
    // console.log(arr1);
   for (let i=0;i<arr1.length;i++){

       let code=arr1[i];
         html +=` <div class="firstChar"><a name="${code}"></a>${code}</div>`
        html1 +=` <li><a href="#${code}">${code}</a></li>`
               for(let j=0;j<obj[code].length;j++){
               let h=obj[code][j];
                   // console.log(obj[elem]);
                   // console.log(obj[elem][i])
                 html +=` <div class="telname"><a href="tel:${h.tel}">${h.name}</a></div>`
         }
        // console.log(html);

   }

   $("section").html(html);
   $(".rightChar").html(html1);




        // console.log($(".firstChar"));
        // window.scroll(f)
        $("section").scroll(function () {

            let arr= $(".firstChar").filter(function (index,elem) {

                return  $(elem).position().top>$("section").scrollTop();
            })
            // console.log( arr);
            if (arr.length==0){
                return;
            }

            // console.log($(arr[0]).position().top)
            // console.log(arr[0].innerText)
            let indexT;
            // console.log(arr[0].innerText);
            for (let i in arr1){
                if (arr1[i]==arr[0].innerText) {
                     indexT=i;
                }
            }
            // console.log(indexT)
            // if (indexT>1){
                indexT=indexT-2;
            // }
            // console.log(indexT)
            // console.log(arr1);
            // 找到它的上一个元素
            // console.log(arr1);
            // console.log(indexT);
            // console.log(arr1[indexT]);
            // $(".firstChar").filter(function (index,elem) {
            //     elem.removeClass("ele");
            // })

            let arr5=$(".firstChar").filter(function (index,elem) {
                $(elem).removeClass("ele");
                return elem.innerText==arr1[indexT];
            })
            // console.log(arr5);
            arr5.addClass("ele")
            // console.log($(".firstChar"));
            // console.log(arr.indexOf("C"));;
        })
    }




})