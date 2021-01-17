const Password = require("node-php-password");
const defpasw = 'Password123'
// let password = Password.hash(defpasw, 'PASSWORD_DEFAULT', {cost: 13});

let hash1 = '$2y$13$ZeMaBQhbcDXD1ApqLuEHYOVqz5qqAiKUidzbxpcX5VD4HcgbjkRc.';
let hash2 = '$2y$13$3n2GECxEk2TMU0tQKKqjQO2aOnPbVL7JQP7WWWxKUQ/DQ0Ixkiqhm';
let hash3 = '$2y$13$fvo1B2ara4NahE7P74X/4.YPSELYb1p7JB6OunhZrFa43fkd6MoQW';
let hash4 = '$2y$13$mrful05xD022V4mUHIcMH.Kyv.FSNy.l51nL0ng0ya.z8uz4SjDNa';
let hash5 = '$2y$13$OQTpmoI5MXhFTUWRMuh10uf7hKj3.NLa6QdnuEQvg2UReyHkqJLJa';
let hash6 = '$2y$13$kXeEoedxsPMb/skwt.0.o.efcXiujdNrmVBx.70B8OGFeE97tIkW6';
let hash7 = '$2y$13$VaNGlzFejbsUA0XGHJpm4.9CGTBVQjMi.c0DGIZm5WUaGzA43yGpO';
let hash8 = '$2y$13$6XvhbanlY0J2PlJKYZj8EuZ9AihXX/G95Etv4rIYgq2f5KmYKdhWW';
let hash9 = '$2y$13$mvySV9FGiv4Riti2yP6yKehFe4.JU2NNB9Oy1V2I1L5.HyBL6MGBS';
let hash10 = '$2y$13$H23fLhQdeJ94WKAZSYA8He3QcSWg//TKCxhtQfx2GTRL/dGJ5qmKy';

console.log(Password.verify(defpasw, hash1));
console.log(Password.verify(defpasw, hash2));
console.log(Password.verify(defpasw, hash3));
console.log(Password.verify(defpasw, hash4));
console.log(Password.verify(defpasw, hash5));
console.log(Password.verify(defpasw, hash6));
console.log(Password.verify(defpasw, hash7));
console.log(Password.verify(defpasw, hash8));
console.log(Password.verify(defpasw, hash9));
console.log(Password.verify(defpasw, hash10));