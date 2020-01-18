(function () {
    let xhr = new XMLHttpRequest();
    const section_title = document.querySelector('.section-title');
    const section__main = document.querySelector('.section-main')
    xhr.onload = function () {
        if (xhr.status === 200) {
            //XML
            // console.log(xhr.responseXML)
            // let xhr_xml = xhr.responseXML;
            // let containerLength = xhr_xml.querySelectorAll('event').length;
            // let locations = xhr_xml.querySelectorAll('location');
            // let dates = xhr_xml.querySelectorAll('date');
            // init('xml',locations,dates,containerLength).forEach((elem) => {
            //     section__main.append(elem);
            // });



            //JSON
            let responseObj = JSON.parse(xhr.responseText)['events'];
            let locations =[];
            let dates = [];
            responseObj.forEach((elem,index) => {
                locations.push(elem['location'])
                dates.push(elem['date'])
            })
            init('json',locations,dates,responseObj.length).forEach((elem) => {
                console.log(elem)
                section__main.append(elem);
            })

            // init(responseObj.length,)
            // let responseJSONStirng = JSON.stringify(responseObj);
            // console.log(responseObj['events'].filter((event) => {
            //     console.log(event);
            //     return true;
            // }))
            // for(let elem in responseObj){
            //     console.log(typeof responseObj[elem]);
            // }
            // console.log(responseJSONStirng)

            // let obj = {
            //     events: [
            //         {
            //             location: 'Taiwan',
            //             map: 'link'
            //         },
            //         {
            //             location: 'canada',
            //             map: 'link'
            //         },
            //         {
            //             location: 'china',
            //             map: 'link'
            //         }
            //     ]
            // }

            // let Obj_JSON = JSON.stringify(obj);
            // console.log(Obj_JSON);
            // let con = Obj_JSON.split('{').join('\n{').split(']').join('\n]');
            // console.log(con)
            // let obj_JSONString = JSON.parse(Obj_JSON);
            // console.log(obj_JSONString['events'].forEach((item) => {
            //     console.log(item);
            // }))
        }
    }


    //將傳進來的資料與建立DOM節點包好，回傳
    function init(datatype, location, date, containerLength) {
        let main_containers = []
        let main_container, main_h1, main_p;
        switch (datatype) {
            case 'xml':
                for (let i = 0; i < containerLength; i++) {
                    main_container = document.createElement('div');
                    main_h1 = document.createElement('h1');
                    main_p = document.createElement('p');
                    main_container.className = 'section-main__wrap';
                    main_h1.className = 'heading-primary';
                    main_p.className = 'section-main__date';
                    //h1與P加入到wrap
                    main_container.append(main_h1);
                    main_container.append(main_p);
                    //加入content
                    main_h1.textContent = location[i].textContent;
                    main_p.textContent = date[i].textContent;

                    main_containers.push(main_container);
                }
                main_containers.forEach((wrap) => {
                    console.log(wrap);
                })
                break;
            case 'json':
                for (let i = 0; i < containerLength; i++) {
                    main_container = document.createElement('div');
                    main_h1 = document.createElement('h1');
                    main_p = document.createElement('p');
                    main_container.className = 'section-main__wrap';
                    main_h1.className = 'heading-primary';
                    main_p.className = 'section-main__date';
                    main_container.append(main_h1);
                    main_container.append(main_p);
                    //加入content
                    main_h1.textContent = location[i];
                    main_p.textContent = date[i];

                    main_containers.push(main_container);
                }
                break;
        }
        
        return main_containers;



    }

    // xhr.open('GET','data/data.html',true);
    // xhr.open('GET','data/data.xml',true);
    xhr.open('GET', 'data/data.json', true);
    setTimeout(() => {
        xhr.send(null);
    },3000);

})();
   