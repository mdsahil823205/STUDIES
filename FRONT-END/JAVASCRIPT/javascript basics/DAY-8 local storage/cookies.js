// 3. cookie ek storage hota hai browser ka isme hum 4kb tak ka data store kar skte hai aur isme jo data store hota hai woh permanent hota hai jaise hi browser ko refersh karnege ke cookie server ke jaayega aur data laayega jo set kiye hai hum cookie main yeh jaada tar backend main use hota hai aur isme sirf add hota hai delete karna hai toh browser se hi hoga agar kuch update delete for temporarily uske liye ek extension download karo edit this cookies naame se usme sab  kar skte hai

// 1. adding a coookie on the webpages with document.cookies
// isme likhne ka tarika alag hota hai par data jo store hotam hai key value ka hisab se string form main
let a = (document.cookie = "name=sahil"); //yeh iska syntax hai key:(name) hai aur value=(sahil) hai
document.cookie = "age=20";
