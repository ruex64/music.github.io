let now_playing = document.querySelector('.now-playing');
let track_art = document.querySelector('.track-art');
let track_name = document.querySelector('.track-name');
let track_artist = document.querySelector('.track-artist');

let playpause_btn = document.querySelector('.playpause-track');
let next_btn = document.querySelector('.next-track');
let prev_btn = document.querySelector('.prev-track');

let seek_slider = document.querySelector('.seek_slider');
let volume_slider = document.querySelector('.volume_slider');
let curr_time = document.querySelector('.current-time');
let total_duration = document.querySelector('.total-duration');
let wave = document.getElementById('wave');
let randomIcon = document.querySelector('.fa-random');
let curr_track = document.createElement('audio');

let track_index = 0;
let isPlaying = false;
let isRandom = false;
let updateTimer;

const music_list = [
    {
        img : 'images/music.png',
        name : 'Aaj Mausam Bada Beimaan Hai',
        artist : 'Laxmikant-Payrelal',
        music : 'music/Aaj Mausam Bada Beimaan Hai.mp3'
    },
    {
        img : 'images/music.png',
        name : 'Aaja Sanam Madhur Chandani',
        artist : 'Manna Dey, Lata Mangeshkar',
        music : 'music/Aaja Sanam Madhur Chandani.mp3'
    }
    ,
    {
        img : 'images/music.png',
        name : 'Aajkal Paon Zaamin Par Nahin Padte',
        artist : 'Lata Mangeshkar',
        music : 'music/Aajkal Paon Zaamin Par Nahin Padte.mp3'
    }
    ,
    {
        img : 'images/music.png',
        name : 'Aajkal Tere Mere Pyar Ke Charche',
        artist : 'Shankar jaikishan',
        music : 'music/Aajkal Tere Mere Pyar Ke Charche.mp3'
    }
    ,
    {
        img : 'images/music.png',
        name : 'Aanewala Pal Janewala Hai',
        artist : 'Laxmikant-Payrelal',
        music : 'music/Aanewala Pal Janewala Hai.mp3'
    }
    ,
    {
        img : 'images/music.png',
        name : 'Aankh Hai Bhari Bhari',
        artist : 'Laxmikant-Payrelal',
        music : 'music/Aankh Hai Bhari Bhari.mp3'
    }
    ,
    {
        img : 'images/music.png',
        name : 'Aap Jaisa Koi',
        artist : 'Laxmikant-Payrelal',
        music : 'music/Aap Jaisa Koi.mp3'
    }
    ,
    {
        img : 'images/music.png',
        name : 'Aap Ke Aa Jane Se',
        artist : 'Laxmikant-Payrelal',
        music : 'music/Aap Ke Aa Jane Se.mp3'
    }
    ,
    {
        img : 'images/music.png',
        name : 'Aate Jate Khoobsurat Awara',
        artist : 'Laxmikant-Payrelal',
        music : 'music/Aate Jate Khoobsurat Awara.mp3'
    }
    ,
    {
        img : 'images/music.png',
        name : 'Ae Kash Ke Hum',
        artist : 'Laxmikant-Payrelal',
        music : 'music/Ae Kash Ke Hum.mp3'
    }
    ,
    {
        img : 'images/music.png',
        name : 'Ae Mere Zohra Jabeen',
        artist : 'Laxmikant-Payrelal',
        music : 'music/Ae Mere Zohra Jabeen.mp3'
    }
    ,
    {
        img : 'images/music.png',
        name : 'Ajab Si',
        artist : 'Laxmikant-Payrelal',
        music : 'music/Ajab Si.mp3'
    }
    ,
    {
        img : 'images/music.png',
        name : 'Ajib Dastan Hai Yeh',
        artist : 'Laxmikant-Payrelal',
        music : 'music/Ajib Dastan Hai Yeh.mp3'
    }
    ,
    {
        img : 'images/music.png',
        name : 'Ankhiyon Ke Jharokhon Se',
        artist : 'Laxmikant-Payrelal',
        music : 'music/Ankhiyon Ke Jharokhon Se.mp3'
    }
    ,
    {
        img : 'images/music.png',
        name : 'Aye Mere Humsafar',
        artist : 'Laxmikant-Payrelal',
        music : 'music/Aye Mere Humsafar.mp3'
    }
    ,
    {
        img : 'images/music.png',
        name : 'Bachna Ae Hasinon Lo Main Aa Gaya',
        artist : 'Laxmikant-Payrelal',
        music : 'music/Bachna Ae Hasinon Lo Main Aa Gaya.mp3'
    }
    ,
    {
        img : 'images/music.png',
        name : 'Badan Pe Sitare Lapete Huye',
        artist : 'Laxmikant-Payrelal',
        music : 'music/Badan Pe Sitare Lapete Huye.mp3'
    }
    ,
    {
        img : 'images/music.png',
        name : 'Bade Achhe Lagte Hain',
        artist : 'Laxmikant-Payrelal',
        music : 'music/Bade Achhe Lagte Hain.mp3'
    }
    ,
    {
        img : 'images/music.png',
        name : 'Bangle Ke Peechhe',
        artist : 'Laxmikant-Payrelal',
        music : 'music/Bangle Ke Peechhe.mp3'
    }
    ,
    {
        img : 'images/music.png',
        name : 'Chaand Taare',
        artist : 'Laxmikant-Payrelal',
        music : 'music/Chaand Taare.mp3'
    }
    ,
    {
        img : 'images/music.png',
        name : 'Chand Mera Dil Chandni Ho Tum',
        artist : 'Laxmikant-Payrelal',
        music : 'music/Chand Mera Dil Chandni Ho Tum.mp3'
    }
    ,
    {
        img : 'images/music.png',
        name : 'Chhu Kar Mere Manko',
        artist : 'Laxmikant-Payrelal',
        music : 'music/Chhu Kar Mere Manko.mp3'
    }
    ,
    {
        img : 'images/music.png',
        name : 'Chhupana Bhi Nahin Aata',
        artist : 'Laxmikant-Payrelal',
        music : 'music/Chhupana Bhi Nahin Aata.mp3'
    }
    ,
    {
        img : 'images/music.png',
        name : 'Chura Ke Dil Mera',
        artist : 'Laxmikant-Payrelal',
        music : 'music/Chura Ke Dil Mera.mp3'
    }
    ,
    {
        img : 'images/music.png',
        name : 'Chura Liya Hai Tumne Jo Dil Ko',
        artist : 'Laxmikant-Payrelal',
        music : 'music/Chura Liya Hai Tumne Jo Dil Ko.mp3'
    }
    ,
    {
        img : 'images/music.png',
        name : 'Dardedil Dardejigar',
        artist : 'Laxmikant-Payrelal',
        music : 'music/Dardedil Dardejigar.mp3'
    }
    ,
    {
        img : 'images/music.png',
        name : 'Deewana Dil Deewana',
        artist : 'Laxmikant-Payrelal',
        music : 'music/Deewana Dil Deewana.mp3'
    }
    ,
    {
        img : 'images/music.png',
        name : 'Dekha Ek Khwab',
        artist : 'Laxmikant-Payrelal',
        music : 'music/Dekha Ek Khwab.mp3'
    }
    ,
    {
        img : 'images/music.png',
        name : 'Dil Ne Yeh Kaha Hain Dil Se',
        artist : 'Laxmikant-Payrelal',
        music : 'music/Dil Ne Yeh Kaha Hain Dil Se.mp3'
    }
    ,
    {
        img : 'images/music.png',
        name : 'Dilbar Mere',
        artist : 'Laxmikant-Payrelal',
        music : 'music/Dilbar Mere.mp3'
    }
    ,
    {
        img : 'images/music.png',
        name : 'Do Dil Mil Rahe Hai',
        artist : 'Laxmikant-Payrelal',
        music : 'music/Do Dil Mil Rahe Hai.mp3'
    }
    ,
    {
        img : 'images/music.png',
        name : 'Ehsaan Tera Hoga',
        artist : 'Laxmikant-Payrelal',
        music : 'music/Ehsaan Tera Hoga.mp3'
    }
    ,
    {
        img : 'images/music.png',
        name : 'Ehsan Tera Hoga Mujh Par',
        artist : 'Laxmikant-Payrelal',
        music : 'music/Ehsan Tera Hoga Mujh Par.mp3'
    }
    ,
    {
        img : 'images/music.png',
        name : 'Ek Ajnabee Haseena Se',
        artist : 'Laxmikant-Payrelal',
        music : 'music/Ek Ajnabee Haseena Se.mp3'
    }
    ,
    {
        img : 'images/music.png',
        name : 'Ek Chatur Naar Badi Hoshiyaar',
        artist : 'Laxmikant-Payrelal',
        music : 'music/Ek Chatur Naar Badi Hoshiyaar.mp3'
    }
    ,
    {
        img : 'images/music.png',
        name : 'Ek Pyar Ka Naghma Hai',
        artist : 'Laxmikant-Payrelal',
        music : 'music/Ek Pyar Ka Naghma Hai.mp3'
    }
    ,
    {
        img : 'images/music.png',
        name : 'EK SANAM CHAHIYE AASHIQUI KE LIYE',
        artist : 'Laxmikant-Payrelal',
        music : 'music/EK SANAM CHAHIYE AASHIQUI KE LIYE.mp3'
    }
    ,
    {
        img : 'images/music.png',
        name : 'Gali Mein Chand',
        artist : 'Laxmikant-Payrelal',
        music : 'music/Gali Mein Chand.mp3'
    }
    ,
    {
        img : 'images/music.png',
        name : 'GHAR SE NIKALTE',
        artist : 'Laxmikant-Payrelal',
        music : 'music/GHAR SE NIKALTE.mp3'
    }
    ,
    {
        img : 'images/music.png',
        name : 'Ghodey Pe Sawaar',
        artist : 'Laxmikant-Payrelal',
        music : 'music/Ghodey Pe Sawaar.mp3'
    }
    ,
    {
        img : 'images/music.png',
        name : 'Ham Ne Tum Ko Dekha',
        artist : 'Laxmikant-Payrelal',
        music : 'music/Ham Ne Tum Ko Dekha.mp3'
    }
    ,
    {
        img : 'images/music.png',
        name : 'Hamen Jab Se Mohabbat',
        artist : 'Laxmikant-Payrelal',
        music : 'music/Hamen Jab Se Mohabbat.mp3'
    }
    ,
    {
        img : 'images/music.png',
        name : 'HUM DIL DE CHUKE SANAM',
        artist : 'Laxmikant-Payrelal',
        music : 'music/HUM DIL DE CHUKE SANAM.mp3'
    }
    ,
    {
        img : 'images/music.png',
        name : 'Jab Koi Baat Bigad Jaye',
        artist : 'Laxmikant-Payrelal',
        music : 'music/Jab Koi Baat Bigad Jaye.mp3'
    }
    ,
    {
        img : 'images/music.png',
        name : 'Janu Meri Jaan',
        artist : 'Laxmikant-Payrelal',
        music : 'music/Janu Meri Jaan.mp3'
    }
    ,
    {
        img : 'images/music.png',
        name : 'Kabhi Kabhi Mere Dil Mein',
        artist : 'Laxmikant-Payrelal',
        music : 'music/Kabhi Kabhi Mere Dil Mein.mp3'
    }
    ,
    {
        img : 'images/music.png',
        name : 'Kabhi Yaadon Mein Aaun',
        artist : 'Laxmikant-Payrelal',
        music : 'music/Kabhi Yaadon Mein Aaun.mp3'
    }
    ,
    {
        img : 'images/music.png',
        name : 'Kahin Door Jab Din Dhal Jaye',
        artist : 'Laxmikant-Payrelal',
        music : 'music/Kahin Door Jab Din Dhal Jaye.mp3'
    }
    ,
    {
        img : 'images/music.png',
        name : 'Kajra Re',
        artist : 'Laxmikant-Payrelal',
        music : 'music/Kajra Re.mp3'
    }
    ,
    {
        img : 'images/music.png',
        name : 'Karvaten Badalte Rahe',
        artist : 'Laxmikant-Payrelal',
        music : 'music/Karvaten Badalte Rahe.mp3'
    }
    ,
    {
        img : 'images/music.png',
        name : 'Kehdoon Tumhen',
        artist : 'Laxmikant-Payrelal',
        music : 'music/Kehdoon Tumhen.mp3'
    }
    ,
    {
        img : 'images/music.png',
        name : 'Kehna Hi Kya',
        artist : 'Laxmikant-Payrelal',
        music : 'music/Kehna Hi Kya.mp3'
    }
    ,
    {
        img : 'images/music.png',
        name : 'Khaike Paan Banaras Wala',
        artist : 'Laxmikant-Payrelal',
        music : 'music/Khaike Paan Banaras Wala.mp3'
    }
    ,
    {
        img : 'images/music.png',
        name : 'Kisi Ki Muskurahaton Pe',
        artist : 'Laxmikant-Payrelal',
        music : 'music/Kisi Ki Muskurahaton Pe.mp3'
    }
    ,
    {
        img : 'images/music.png',
        name : 'Kisi Ki Muskurahaton Se',
        artist : 'Laxmikant-Payrelal',
        music : 'music/Kisi Ki Muskurahaton Se.mp3'
    }
    ,
    {
        img : 'images/music.png',
        name : 'Kitaben Bahut Si',
        artist : 'Laxmikant-Payrelal',
        music : 'music/Kitaben Bahut Si.mp3'
    }
    ,
    {
        img : 'images/music.png',
        name : 'Kora Kagaz Tha Yeh Man Mera',
        artist : 'Laxmikant-Payrelal',
        music : 'music/Kora Kagaz Tha Yeh Man Mera.mp3'
    }
    ,
    {
        img : 'images/music.png',
        name : 'kuch to log kahaegae',
        artist : 'Laxmikant-Payrelal',
        music : 'music/kuch to log kahaegae.mp3'
    }
    ,
    {
        img : 'images/music.png',
        name : 'Kya Cheez Ho Tum Khud',
        artist : 'Laxmikant-Payrelal',
        music : 'music/Kya Cheez Ho Tum Khud.mp3'
    }
    ,
    {
        img : 'images/music.png',
        name : 'Kya Hua Tera Vada',
        artist : 'Laxmikant-Payrelal',
        music : 'music/Kya Hua Tera Vada.mp3'
    }
    ,
    {
        img : 'images/music.png',
        name : 'Kya Khoob Lagti Ho',
        artist : 'Laxmikant-Payrelal',
        music : 'music/Kya Khoob Lagti Ho.mp3'
    }
    ,
    {
        img : 'images/music.png',
        name : 'Kya Yahi Pyar Hai',
        artist : 'Laxmikant-Payrelal',
        music : 'music/Kya Yahi Pyar Hai.mp3'
    }
    ,
    {
        img : 'images/music.png',
        name : 'Lag Ja Gale Se Phir',
        artist : 'Laxmikant-Payrelal',
        music : 'music/Lag Ja Gale Se Phir.mp3'
    }
    ,
    {
        img : 'images/music.png',
        name : 'Likhe Jo Khat Tujhe',
        artist : 'Laxmikant-Payrelal',
        music : 'music/Likhe Jo Khat Tujhe.mp3'
    }
    ,
    {
        img : 'images/music.png',
        name : 'Main Agar Kahoon',
        artist : 'Laxmikant-Payrelal',
        music : 'music/Main Agar Kahoon.mp3'
    }
    ,
    {
        img : 'images/music.png',
        name : 'Main Koi Aisa Geet Gaoon',
        artist : 'Laxmikant-Payrelal',
        music : 'music/Main Koi Aisa Geet Gaoon.mp3'
    }
    ,
    {
        img : 'images/music.png',
        name : 'Main Shair To Nahin',
        artist : 'Laxmikant-Payrelal',
        music : 'music/Main Shair To Nahin.mp3'
    }
    ,
    {
        img : 'images/music.png',
        name : 'Mene pucha chand sae',
        artist : 'Laxmikant-Payrelal',
        music : 'music/Mene pucha chand sae.mp3'
    }
    ,
    {
        img : 'images/music.png',
        name : 'Mere Mehboob Qayamat Hogi',
        artist : 'Laxmikant-Payrelal',
        music : 'music/Mere Mehboob Qayamat Hogi.mp3'
    }
    ,
    {
        img : 'images/music.png',
        name : 'Mere Samnewali Khidki Mein',
        artist : 'Laxmikant-Payrelal',
        music : 'music/Mere Samnewali Khidki Mein.mp3'
    }
    ,
    {
        img : 'images/music.png',
        name : 'Mere Sapnon Ki Rani',
        artist : 'Laxmikant-Payrelal',
        music : 'music/Mere Sapnon Ki Rani.mp3'
    }
    ,
    {
        img : 'images/music.png',
        name : 'Meri Bheegi Bheegi Si',
        artist : 'Laxmikant-Payrelal',
        music : 'music/Meri Bheegi Bheegi Si.mp3'
    }
    ,
    {
        img : 'images/music.png',
        name : 'Neele Neele Ambar Par',
        artist : 'Laxmikant-Payrelal',
        music : 'music/Neele Neele Ambar Par.mp3'
    }

    ,
    {
        img : 'images/music.png',
        name : 'O Haseena Zulfonwale Jane Jahan',
        artist : 'Laxmikant-Payrelal',
        music : 'music/O Haseena Zulfonwale Jane Jahan.mp3'
    }
    ,
    {
        img : 'images/music.png',
        name : 'O Mere Dil Ke Chain',
        artist : 'Laxmikant-Payrelal',
        music : 'music/O Mere Dil Ke Chain.mp3'
    }
    ,
    {
        img : 'images/music.png',
        name : 'O O JAANE JAANA',
        artist : 'Laxmikant-Payrelal',
        music : 'music/O O JAANE JAANA.mp3'
    }
    ,
    {
        img : 'images/music.png',
        name : 'O Saathi Re',
        artist : 'Laxmikant-Payrelal',
        music : 'music/O Saathi Re.mp3'
    }
    ,
    {
        img : 'images/music.png',
        name : 'Meri Umar Ke Naujawano',
        artist : 'Laxmikant-Payrelal',
        music : 'music/Meri Umar Ke Naujawano.mp3'
    }
    ,
    {
        img : 'images/music.png',
        name : 'Pal Bhar Ke Liye',
        artist : 'Laxmikant-Payrelal',
        music : 'music/Pal Bhar Ke Liye.mp3'
    }
    ,
    {
        img : 'images/music.png',
        name : 'Panna Ki Tamanna Hai',
        artist : 'Laxmikant-Payrelal',
        music : 'music/Panna Ki Tamanna Hai.mp3'
    }
    ,
    {
        img : 'images/music.png',
        name : 'Pehla Nasha',
        artist : 'Laxmikant-Payrelal',
        music : 'music/Pehla Nasha.mp3'
    }
    ,
    {
        img : 'images/music.png',
        name : 'Piya Tu Ab To Aaja',
        artist : 'Laxmikant-Payrelal',
        music : 'music/Piya Tu Ab To Aaja.mp3'
    }
    ,
    {
        img : 'images/music.png',
        name : 'Premi Aashiq Aawara',
        artist : 'Laxmikant-Payrelal',
        music : 'music/Premi Aashiq Aawara.mp3'
    }
    ,
    {
        img : 'images/music.png',
        name : 'Pyar Diwana Hota Hai',
        artist : 'Laxmikant-Payrelal',
        music : 'music/Pyar Diwana Hota Hai.mp3'
    }
    ,
    {
        img : 'images/music.png',
        name : 'Saathiya Tune Kya Kiya',
        artist : 'Laxmikant-Payrelal',
        music : 'music/Saathiya Tune Kya Kiya.mp3'
    }
    ,
    {
        img : 'images/music.png',
        name : 'Tere Bina Zindagi Se',
        artist : 'Laxmikant-Payrelal',
        music : 'music/Tere Bina Zindagi Se.mp3'
    }
    ,
    {
        img : 'images/music.png',
        name : 'Tere Jaisa Yaar Kahan',
        artist : 'Laxmikant-Payrelal',
        music : 'music/Tere Jaisa Yaar Kahan.mp3'
    }
    ,
    {
        img : 'images/music.png',
        name : 'TU MERI ZINDAGI HAI',
        artist : 'Laxmikant-Payrelal',
        music : 'music/TU MERI ZINDAGI HAI.mp3'
    }
    ,
    {
        img : 'images/music.png',
        name : 'Tu Mile Dil Khile',
        artist : 'Laxmikant-Payrelal',
        music : 'music/Tu Mile Dil Khile.mp3'
    }
    ,
    {
        img : 'images/music.png',
        name : 'TU PYAR HAI KISI AUR KA',
        artist : 'Laxmikant-Payrelal',
        music : 'music/TU PYAR HAI KISI AUR KA.mp3'
    }
    ,
    {
        img : 'images/music.png',
        name : 'Tujhse Naraz Nahin Zindagi',
        artist : 'Laxmikant-Payrelal',
        music : 'music/Tujhse Naraz Nahin Zindagi.mp3'
    }
    ,
    {
        img : 'images/music.png',
        name : 'Tum Aa Gaye Ho Noor Aa Gaya',
        artist : 'Laxmikant-Payrelal',
        music : 'music/Tum Aa Gaye Ho Noor Aa Gaya.mp3'
    }
    ,
    {
        img : 'images/music.png',
        name : 'TUMSE MILKE DIL KA',
        artist : 'Laxmikant-Payrelal',
        music : 'music/TUMSE MILKE DIL KA.mp3'
    }
    ,
    {
        img : 'images/music.png',
        name : 'Yaadon Ki Baaraat',
        artist : 'Laxmikant-Payrelal',
        music : 'music/Yaadon Ki Baaraat.mp3'
    }
    ,
    {
        img : 'images/music.png',
        name : 'Ye Dil Tum Bin Lagta Nahin',
        artist : 'Laxmikant-Payrelal',
        music : 'music/Ye Dil Tum Bin Lagta Nahin.mp3'
    }
    ,
    {
        img : 'images/music.png',
        name : 'Ye Jawani Hai Diwani',
        artist : 'Laxmikant-Payrelal',
        music : 'music/Ye Jawani Hai Diwani.mp3'
    }
    ,
    {
        img : 'images/music.png',
        name : 'Ye Ladka Hay Allah Kaisa Hai Diwana',
        artist : 'Laxmikant-Payrelal',
        music : 'music/Ye Ladka Hay Allah Kaisa Hai Diwana.mp3'
    }
    ,
    {
        img : 'images/music.png',
        name : 'Yeh Sham Mastani',
        artist : 'Laxmikant-Payrelal',
        music : 'music/Yeh Sham Mastani.mp3'
    }
    ,
    {
        img : 'images/music.png',
        name : 'Yeh vada raha',
        artist : 'Laxmikant-Payrelal',
        music : 'music/Yeh vada raha.mp3'
    }
    ,
    {
        img : 'images/music.png',
        name : 'Zeehale Muskin ',
        artist : 'Laxmikant-Payrelal',
        music : 'music/Zeehale Muskin .mp3'
    }
    ,
    {
        img : 'images/music.png',
        name : 'Zindagi Ek Safar Hai Suhana',
        artist : 'Laxmikant-Payrelal',
        music : 'music/Zindagi Ek Safar Hai Suhana.mp3'
    }
    ,
    {
        img : 'images/music.png',
        name : 'Zindagi Ke Safar Mein',
        artist : 'Laxmikant-Payrelal',
        music : 'music/Zindagi Ke Safar Mein.mp3'
    }
    ,
    {
        img : 'images/music.png',
        name : 'Zindagi Ki Yahi Reet Hai',
        artist : 'Laxmikant-Payrelal',
        music : 'music/Zindagi Ki Yahi Reet Hai.mp3'
    }


    
];

loadTrack(track_index);

function loadTrack(track_index){
    clearInterval(updateTimer);
    reset();

    curr_track.src = music_list[track_index].music;
    curr_track.load();

    track_art.style.backgroundImage = "url(" + music_list[track_index].img + ")";
    track_name.textContent = music_list[track_index].name;
    track_artist.textContent = music_list[track_index].artist;
    now_playing.textContent = "Playing music " + (track_index + 1) + " of " + music_list.length;

    updateTimer = setInterval(setUpdate, 1000);

    curr_track.addEventListener('ended', nextTrack);
    random_bg_color();
}

function random_bg_color(){
    let hex = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e'];
    let a;

    function populate(a){
        for(let i=0; i<6; i++){
            let x = Math.round(Math.random() * 14);
            let y = hex[x];
            a += y;
        }
        return a;
    }
    let Color1 = populate('#');
    let Color2 = populate('#');
    var angle = 'to right';

    let gradient = 'linear-gradient(' + angle + ',' + Color1 + ', ' + Color2 + ")";
    document.body.style.background = gradient;
}
function reset(){
    curr_time.textContent = "00:00";
    total_duration.textContent = "00:00";
    seek_slider.value = 0;
}
function randomTrack(){
    isRandom ? pauseRandom() : playRandom();
}
function playRandom(){
    isRandom = true;
    randomIcon.classList.add('randomActive');
}
function pauseRandom(){
    isRandom = false;
    randomIcon.classList.remove('randomActive');
}
function repeatTrack(){
    let current_index = track_index;
    loadTrack(current_index);
    playTrack();
}
function playpauseTrack(){
    isPlaying ? pauseTrack() : playTrack();
}
function playTrack(){
    curr_track.play();
    isPlaying = true;
    track_art.classList.add('rotate');
    wave.classList.add('loader');
    playpause_btn.innerHTML = '<i class="fa fa-pause-circle fa-5x"></i>';
}
function pauseTrack(){
    curr_track.pause();
    isPlaying = false;
    track_art.classList.remove('rotate');
    wave.classList.remove('loader');
    playpause_btn.innerHTML = '<i class="fa fa-play-circle fa-5x"></i>';
}
function nextTrack(){
    if(track_index < music_list.length - 1 && isRandom === false){
        track_index += 1;
    }else if(track_index < music_list.length - 1 && isRandom === true){
        let random_index = Number.parseInt(Math.random() * music_list.length);
        track_index = random_index;
    }else{
        track_index = 0;
    }
    loadTrack(track_index);
    playTrack();
}
function prevTrack(){
    if(track_index > 0){
        track_index -= 1;
    }else{
        track_index = music_list.length -1;
    }
    loadTrack(track_index);
    playTrack();
}
function seekTo(){
    let seekto = curr_track.duration * (seek_slider.value / 100);
    curr_track.currentTime = seekto;
}
function setVolume(){
    curr_track.volume = volume_slider.value / 100;
}
function setUpdate(){
    let seekPosition = 0;
    if(!isNaN(curr_track.duration)){
        seekPosition = curr_track.currentTime * (100 / curr_track.duration);
        seek_slider.value = seekPosition;

        let currentMinutes = Math.floor(curr_track.currentTime / 60);
        let currentSeconds = Math.floor(curr_track.currentTime - currentMinutes * 60);
        let durationMinutes = Math.floor(curr_track.duration / 60);
        let durationSeconds = Math.floor(curr_track.duration - durationMinutes * 60);

        if(currentSeconds < 10) {currentSeconds = "0" + currentSeconds; }
        if(durationSeconds < 10) { durationSeconds = "0" + durationSeconds; }
        if(currentMinutes < 10) {currentMinutes = "0" + currentMinutes; }
        if(durationMinutes < 10) { durationMinutes = "0" + durationMinutes; }

        curr_time.textContent = currentMinutes + ":" + currentSeconds;
        total_duration.textContent = durationMinutes + ":" + durationSeconds;
    }
}
