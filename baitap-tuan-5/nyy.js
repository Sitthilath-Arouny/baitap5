var man=[
    {
    id:1,
    name:"Quần kaki",
    code:"TC143NA",
    price:"250.000",
    image:"https://linhvnxk.com/wp-content/uploads/2018/09/quan-kaki-uniqlo-regular-fit-mau-be.jpg"

    },
    {
    id:2,
    name:"Áo sơ mi nam",
    code:"TC1342NA",
    price:"380.000",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0j94jyr0mfCp7aPbIX-QXQhkvJplpMqhG-A&usqp=CAU"
    },
    {
    id:3,
    name:"Quần tây",
    code:"TC323",
    price:"270.000",
    image:"https://4menshop.com/images/thumbs/2020/09/quan-tay-tui-sau-phoi-day-det-qt022-15555.png"

    },
    {
    id:4,
    name:"Bộ đồ thể thao",
    code:"TC223",
    price:"300.000",
    image:"https://bizweb.dktcdn.net/thumb/large/100/438/408/products/sdm5013-xth-1.jpg?v=1704250419647"

    }

]
var women=[
    {
    id:1,
    name:"váy ",
    code:"TC143",
    price:"250.000",
    image:"https://cdn.kkfashion.vn/23455-large_default/dam-xanh-xoe-phoi-nut-co-chu-v-tay-ngan-kk160-38.jpg"

    },
    {
    id:2,
    name:"Áo sơ mi nữ",
    code:"TC123",
    price:"200.000",
    image:"https://cdn.kkfashion.vn/24532-large_default/ao-so-mi-nu-tay-dai-hoa-tiet-ke-soc-asm14-19.jpg"
    },
    {
    id:3,
    name:"Áo Khoác",
    code:"TC323",
    price:"270.000",
    image:"https://img.lazcdn.com/g/p/f2a575eab8c66e4e0f3df0b21ff4d03c.jpg_720x720q80.jpg"

    },
    {
    id:4,
    name:"Áo thun",
    code:"TC223",
    price:"300.000",
    image:"https://salt.tikicdn.com/cache/w1200/ts/product/cb/d2/a0/c2bd00e68910e5162272f0dc2ef165f1.jpg"

    }
]
function listProducts(){
    for(let i=0; i<= man.length-1;i++){
        var demo = '<div class="col-3">';
        demo+= '<div class="card" style="width: 18rem; ">';
        demo+= '<img src="'+man[i].image+'" class="card-img-top" style="height:400px; ">';
        demo += '<div class="card-body">';
        demo += '<h5 class="card-title">'+man[i].name+'</h5>';
        demo += '<p class="card-text">'+man[i].price+'</p>';
        demo += '<a href="#" class="btn btn-primary" onclick="oder()">Đặt mua</a>';
        demo += '</div>';
        demo += '</div>';
        demo += '</div>';
        console.log(demo);
        document.getElementById("men").innerHTML+= demo;


    }
    for(let i=0; i<= women.length-1;i++){
        var demo = '<div class="col-3">';
        demo+= '<div class="card" style="width: 18rem; ">';
        demo+= '<img src="'+women[i].image+'" class="card-img-top" style="height:400px; ">';
        demo += '<div class="card-body">';
        demo += '<div class="card-title">'+women[i].name + '</h5>';
        demo += '<p class="card-text">'+women[i].price+'</p>';
        demo += '<a href="#" class="btn btn-primary" onclick="oder()">Đặt mua</a>';
        demo += '</div>';
        demo += '</div>';
        demo += '</div>';
        console.log(demo);
        document.getElementById("women").innerHTML+= demo;


    }
    
    
    }