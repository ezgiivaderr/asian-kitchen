const menu = [
   {
      id: 1,
      title: "Tteokbokki",
      category: "Korea",
      price: 10.99,
      img:
        "https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg",
      desc: `Spicy rice cakes, serving with fish cake.`,
    },
   {
      id: 2,
      title: "Chicken Ramen",
      category: "Japan",
      price: 7.99,
      img:
        "https://www.forkknifeswoon.com/wp-content/uploads/2014/10/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg",
      desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `,
    },
   {
      id: 3,
      title: "Bibimbap",
      category: "Korea",
      price: 8.99,
      img:
        "https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg",
      desc: `Boiling vegetables, serving with special hot sauce`,
    },
    {
      id: 4,
      title: "Dan Dan Mian",
      category: "China",
      price: 5.99,
      img:
        "https://thewoksoflife.com/wp-content/uploads/2014/11/dan-dan-noodles-12.jpg",
      desc: `Dan dan noodle, serving with green onion `,
    },
   {
      id: 5,
      title: "Yangzhou Fried Rice",
      category: "China",
      price: 12.99,
      img:
        "https://salu-salo.com/wp-content/uploads/2013/02/Yangzhou-Fried-Rice1.jpg",
      desc: `Yangzhou style fried rice, serving with bean and pickles `,
    },
    {
      id: 6,
      title: "Onigiri",
      category: "Japan",
      price: 9.99,
      img:
        "https://www.manusmenu.com/wp-content/uploads/2017/08/Onigiri-3-1-of-1.jpg",
      desc: `Rice Sandwich, serving with soy sauce`,
    },
    {
      id: 7,
      title: "Jajangmyeon",
      category: "Korea",
      price: 15.99,
      img:
        "https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg",
      desc: `Black bean sauce noodle, serving with green onion `,
    },
   {
      id: 8,
      title: "Ma Yi Shang Shu",
      category: "China",
      price: 12.99,
      img:
        "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg",
      desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
    },
    {
      id: 9,
      title: "Doroyaki",
      category: "Japan",
      price: 3.99,
      img:
        "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
      desc: `Red bean paste dessert, serving with honey.`,
    },
];

const menu_container=document.querySelector(".section-center")
const button_group=document.querySelector(".btn-container")
 

const categories=menu.reduce((acc,item)=>{            //categori isimleri dynamically oluşturuldu.
          
      if(!acc.includes(item.category)){
        acc.push(item.category)
      }
       return acc;

},["All"])
console.log(categories)

const categoryList = () => {
    
    let buttons=categories.map(item => {              //btns dynamically oluşturuldu.menuye eklenen her yeni categori  için default button oluşur
      
      return `<button class="btn btn-outline-dark btn-item" data-id=${item}>${item}</button>`;
    
    }).join("")
   
    button_group.innerHTML=buttons                           //butonları butoncontainer'a ekledik
    const buttonList= document.querySelectorAll(".btn-item"); //buttons ile butonlar oluşturuldu ama bir liste halinde değil,bu butonlara ait classı bir değişkene atarsak ,bu butonlara ait bir NodeList oluşur
    
    buttonList.forEach(value => {                       //buttonList'i forEach ile döndürüp, herbirine eklenmesi gereken özellikleri veriyoruz
      
      value.addEventListener("click", (event) => {      //click event'i ekledik
        
        const currentbutton = event.currentTarget.dataset.id; //categoryList de butonların her birine kendi ismiyle data id'si tanımlandı
        console.log(currentbutton)                           //event.currentTarget.dataset.id özelliği: eventin gerçekleştiği butonu, dataset id'si ile hangisinde ise algılar ve eventin geçekleştiği butonu currentButton adlı değişkene atadık
        
        const menuButton = menu.filter(item => {            //butona tıklandıktan sonra,gelecek bilgiler için menu filtreleme yapıldı
          if (item.category === currentbutton) {            //eğer menu elemanının category'si tıklanan butona eşitse
            return item;                                    //elemana dön.
          }
        });

        if (currentbutton === "All") {                      //eğer tıklanılan buton All ise menuList function ile menunun bütün elemanları çağırılır
          menuList(menu);
        } else {
          menuList(menuButton);                             //tıklanan All butonu değilse, menuList function ile menuButton çağırılır(yukarıda oluşturduk)
        }
      
      });
  });

}

const menuList = (element) => {                         //menuList function categoryList'de çağırılan infoya ait bilgileri sayfada göstermek için oluşturuldu
  
  let containerMenu = element.map(item => {             //menu çağırılırsa menu'nun mapi, menuButton çağırılırsa menuButton'ın mapi döner
      return `
          <div class="card mb-3 offset-1 menu-items" style="max-width: 500px;">  
            <div class="row g-0 menu-info ">
                <div class="col-md-4 ">
                    <img src="${item.img}" class="img-fluid photo" alt="...">
                </div>
                <div class="col-md-8">
                    <div class="card-body menu-title">
                        <h5 class="card-title ">${item.title} </h5> 
                        <h5 >${item.price}</h5> 
                      </div>
                    <p class="card-text menu-text">${item.desc}</p>
                </div>
            </div>
          </div>
          `
  }).join("")

  menu_container.innerHTML = containerMenu;         //dönen bilgiyi container'a ekledik
};

document.addEventListener("DOMContentLoaded",categoryList())   
document.addEventListener("DOMContentLoaded",menuList(menu))


 //function oluşturulduğu için ve function'ı çalıştırmak için çağırmak gerekir,direkt categoryList(),menuList(menu) yazarak da çağırabilirdik
 //ben burada "DOMContentLoaded" eventini kullanmak istedim.bu event ile dokumanımıza function çağırılınca sayda görünme işlemi gerçekleşir 






