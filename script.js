window.onload = buildHome;

function buildHome() {
    buildNavigation();
    buildBody();
    buildPosts();
}

function buildNavigation() {
    let navigation = element("div", "navigation", {"id": "navigation"});
    
    let logoWrapper = element("div", "logo_wrapper");
    let buttonWrapper = element("div", "button_wrapper");
    
    let logo = element("div", "nav_button"); 
    let login = element("div", "nav_button");
    
    let b1 = element("div", "nav_button");
    let b2 = element("div", "nav_button");
    let b3 = element("div", "nav_button");
    
    logo.innerHTML = "Muzil & Co.<br>Real estate";
    login.innerText = "Log in";
    b1.innerText = "Agents";
    b2.innerText = "Sales";
    b3.innerText = "Rentals";
    
    appendChildren(
        logoWrapper,
        [
            logo,
            login
        ]
        );
        
    appendChildren(
        buttonWrapper,
        [
            b1,
            b2,
            b3
        ]
    );
            
    appendChildren(
        navigation,
        [
            logoWrapper,
            buttonWrapper
        ]
    );
                
    document.getElementById("body").appendChild(navigation);
    

}

function buildBody() {

    let carousel = element("div", "carousel", {"id": "carousel"});

    let scrollButtonLeft = element("button", "scroll_button", {"onclick": "changeCarouselImage(\"left\")"});
    scrollButtonLeft.innerHTML = "«"

    let scrollButtonRight = element("button", "scroll_button", {"onclick": "changeCarouselImage(\"right\")"});
    scrollButtonRight.innerHTML = "»"

    let bigImage = element("img", "big_image", {"src": "https://static.wixstatic.com/media/e3c73352fb2f466daa0c0b7869c8ecc7.jpg/v1/fill/w_980,h_800,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/e3c73352fb2f466daa0c0b7869c8ecc7.jpg", "alt": "big_image", "id": "big_image"});


    const weirdBox = element("div", "all_sales_ad")
    
    const wbHeading = element("div", "wb_heading");
    wbHeading.innerText = "STUNNING 6 BED HOUSE IN THE HEART OF THE CITY"

    const wbDescription = element("div", "wb_description");
    wbDescription.innerText = "Buy 6 bed house in the heart of the city. This purchase is definitely not a scam. Please purchase our house please bro please we will think you for ages man please ong frfr."

    const wbPrice = element("div", "wb_price");
    wbPrice.innerText = "$2,000,000";

    const wbBuy = element("a", "wb_buy", {"href": "#"});
    wbBuy.innerText = "All Sales";

    appendChildren(
        weirdBox,
        [
            wbHeading,
            wbDescription,
            wbPrice,
            wbBuy
        ]
    );

    appendChildren(
        carousel,
        [
            scrollButtonLeft,
            bigImage,
            scrollButtonRight,
            weirdBox
        ]
    );

    document.getElementById("body").appendChild(carousel);

}

function buildPosts() {

    const intro = element("div", "heading");
    intro.innerText = "LATEST PROPERTIES FOR SALE";

    const postParent = element("div", "post_parent")

    const post1 = createPost(
        "https://static.wixstatic.com/media/28b0ae19f137491787303790a4bd3284.jpg/v1/fill/w_445,h_310,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/28b0ae19f137491787303790a4bd3284.jpg",
        "DOWN AVENUE",
        "$500,000",
        "4",
        "uno"
    );

    const post2 = createPost(
        "https://static.wixstatic.com/media/484b935214aa4750a37c87f871a0f836.jpg/v1/fill/w_1157,h_547,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/484b935214aa4750a37c87f871a0f836.jpg",
        "QUEEN'S WAY",
        "$450,000",
        "3",
        "dos"
    );

    const post3 = createPost(
        "https://static.wixstatic.com/media/694bde92e40e457ebbfa66c0291b5b51.jpg/v1/fill/w_789,h_1014,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/694bde92e40e457ebbfa66c0291b5b51.jpg",
        "RANDALL CLOSE",
        "$790,000",
        "6",
        "hombres"
    );

    appendChildren(
        postParent,
        [
            post1,
            post2,
            post3
        ]
    );

    appendChildren(
        document.getElementById("body"),
        [
            intro,
            postParent
        ]
    );
    
}

function element(name, className, attributes) {

    const element = document.createElement(name);
    element.setAttribute("class", className);

    if (attributes) {

        Object.keys(attributes).forEach(attr => {
            element.setAttribute(attr, attributes[attr]);
        })
    }

    return element;

}

function appendChildren(element, children) {

    children.forEach(c => {
        element.appendChild(c);
    });

}

function createPost(img, name, p, b, tid) {

    const post = element("div", "post_preview");

    let thumbnail = element("img", "post_thumbnail", {"src": img, "id": tid})
    let thumbnailWrapper = element("div", "post_thumbnail_wrapper");
    thumbnailWrapper.appendChild(thumbnail);

    let heading = element("div", "post_heading");
    heading.innerText = name;

    let price = element("div", "post_price");
    price.innerText = p;

    let bedrooms = element("div", "post_bedrooms");
    bedrooms.innerText = `${b} Bedrooms`;

    let description = element("div", "post_description");
    description.innerText = "Hey kid named finger! If that's your real name. Congratulations on passing the Ohio state bar. You are the greatest legal mind I've ever known. Oh and, when you get into the court room, maybe don't shout 'THE ONE PIECE! THE ONE PIECE IS REAL!!'. You're gonna scare away your clients. Maybe just keep that to yourself. Oh and as your old pal chuck says: 'Have some more chicken, have some more pie. It doesn't matter if it's boiled or fried!' Have a happy monday, Better Call Saul day!"

    let readMore = element("a", "post_readmore", {"href": "#"});
    readMore.innerText = "READ MORE";

    appendChildren(
        post,
        [
            thumbnailWrapper,
            heading,
            price,
            bedrooms,
            description,
            readMore
        ]
    );

    return post
}

function changeCarouselImage(direction) {

    const images = [
        "https://static.wixstatic.com/media/e3c73352fb2f466daa0c0b7869c8ecc7.jpg/v1/fill/w_980,h_800,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/e3c73352fb2f466daa0c0b7869c8ecc7.jpg",
        "https://images.livspace-cdn.com/plain/https://jumanji.livspace-cdn.com/magazine/wp-content/uploads/sites/2/2018/12/22103134/Cover-1.jpg",
        "https://www.recommend.my/blog/wp-content/uploads/2016/09/shutterstock_304351451-1000x563.jpg",
        'https://media.designcafe.com/wp-content/uploads/2023/01/31151510/contemporary-interior-design-ideas-for-your-home.jpg',
        "https://jumanji.livspace-cdn.com/magazine/wp-content/uploads/sites/2/2022/04/13225131/cover-3.png"
    ]

    const image = document.getElementById("big_image")
    const src = image.getAttribute("src");
    const index = images.indexOf(src);

    if (direction === "left") {
        if (!images[index-1]) return image.setAttribute("src", images[images.length-1])
        image.setAttribute("src", images[index-1]);
    }
    if (direction === "right") {
        if (!images[index+1]) return image.setAttribute("src", images[0])
        image.setAttribute("src", images[index+1]);
    }

}