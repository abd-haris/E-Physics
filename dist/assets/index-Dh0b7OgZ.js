var X=e=>{throw TypeError(e)};var O=(e,a,n)=>a.has(e)||X("Cannot "+n);var l=(e,a,n)=>(O(e,a,"read from private field"),n?n.call(e):a.get(e)),u=(e,a,n)=>a.has(e)?X("Cannot add the same private member more than once"):a instanceof WeakSet?a.add(e):a.set(e,n),o=(e,a,n,t)=>(O(e,a,"write to private field"),t?t.call(e,n):a.set(e,n),n),G=(e,a,n)=>(O(e,a,"access private method"),n);(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))t(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const d of s.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&t(d)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function t(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function J(e){const a=e.split("/").filter(t=>t),n={};if(a.length>0?n.resource=a[0]:n.resource=null,a.length>1){const t=a[1],i=a[2];a[3],n.resource==="my-class"&&t==="my"?n.isMyPage=!0:t==="course"&&a.length>2?(n.courseSegment=t,n.moduleId=a[2]):a.length>2&&i==="corridor"?(n.id=t,n.corridor=i):i==="module"&&a.length>3?(n.id=t,n.module=i,n.moduleId=a[3]):n.id=t}return n}function ea(e){let a="";return e.resource&&(a=a.concat(`/${e.resource}`)),e.resource==="my-class"&&e.isMyPage?`${a}/my`:e.resource==="my-class"&&e.courseSegment==="course"&&e.moduleId?`${a}/course/moduleId`:e.id&&e.corridor?`${a}/:id/corridor`:e.id&&e.module&&e.moduleId?`${a}/:id/module/:moduleId`:(e.id&&(a=a.concat("/:id")),a||"/")}function R(){return location.hash.replace("#","")||"/"}function Z(){const e=R(),a=J(e);return ea(a)}function _(){const e=R();return J(e)}function ta(e){const a=J(e);return ea(a)}function ia(e){return J(e)}var g,j;class sa{constructor({view:a,model:n}){u(this,g);u(this,j);o(this,g,a),o(this,j,n)}async initialDashboard(){try{const a=await l(this,j).getAllModules();if(!a){console.log("populateDashboard: ",a),l(this,g).populateContinueLearningDashboardError();return}l(this,g).populateLearningDashboardList(a.data),l(this,g).levelLearningDashboard(a.gamification)}catch(a){console.error("initialDashboard: ",a),l(this,g).populateContinueLearningDashboardError();return}}}g=new WeakMap,j=new WeakMap;const r={message:"Successfully retrieved all modules.",data:[{courseId:"course101",title:"Sistem Pengukuran",kelas:"10",image:"/images/image-materi/pengukuran.jpg",joinClass:!1,completed:!1,modules:[{moduleId:"module101",subTitle:"Besaran Fisika",description:"Besaran merupakan sesuatu yang akan diukur. Besaran terdiri atas besaran pokok dan besaran turunan. Besaran pokok merupakan besaran dasar yang satuannya sudah ditetapkan. Besaran turunan merupakan besaran yang satuannya tersusun dari beberapa satuan besaran pokok.",completed:!1,completedAt:null},{moduleId:"module102",subTitle:"Satuan Fisika",description:"Satuan merupakan ukuran yang menjadi acuan dari suatu besaran. Terdapat beberapa sistem satuan yang digunakan di dunia, yaitu sistem FPS (feet, pound,second), CGS (sentimeter, gram, sekon), dan MKS (meter, kilogram, sekon). Beberapa negara memiliki kebiasaannya masing-masing dalam penggunaan sistem satuan. Oleh karena itu, masyarakat ilmiah bersama-sama membuat kesepakatan tentang satu sistem satuan baku yang digunakan secara universal. Satuan tersebut adalah satuan internasional, dalam bahasa aslinya Systeme International D’ Unites, atau disingkat SI.",completed:!1,completedAt:null},{moduleId:"module103",subTitle:"Dimensi",description:"Dimensi merupakan cara suatu besaran turunan disusun berdasarkan besaran pokoknya. Suatu besaran turunan dapat dinyatakan dalam susunan beberapa besaran pokok yang dapat diketahui dengan melakukan analisis dimensi. Dimensi dari besaran pokok berupa lambang yang ditulis dengan kurung siku dan huruf kapital tertentu. Diantara dimensi-dimensi untuk besaran pokok yaitu: Panjang [L], Massa [M], Waktu [T], Suhu [0], Kuat arus listrik [I], Intensitas cahaya [J], Jumlah zat [N]. Adapun beberapa dimensi untuk besaran turunan diantaranya, Kecepatan [L]/[T] dan Momentum [M] [L]/[T].",completed:!1,completedAt:null},{moduleId:"module104",subTitle:"Angka Penting",description:" Angka dapat diperoleh dari mengukur dan membilang. Untuk mengetahui luas tanah perkebunan misalnya, maka harus dilakukan pengukuran. Sedangkan untuk mengetahui jumlah pohon yang tertanam di kebun maka diperoleh dengan cara membilang. Angka yang diperoleh dari hasil megukur disebut angka penting (berarti). Sedangkan angka hasil membilang disebut angka eksak (pasti). Angka penting terdiri dari angka pasti dan angka yang diragukan (angka taksiran). Angka taksiran pada angka penting (angka hasil pengukuran) terletak digit terakhir. Misalkan hasil pengukuran tebal buku menggunakan jangka sorong adalah 1,25 cm. Angka 1 dan 2 adalah angka pasti, sedangkan angka 5 adalah taksiran.",completed:!1,completedAt:null}],progress:0},{courseId:"course102",title:"Pemanasan Global",kelas:"10",joinClass:!1,completed:!1,image:"/images/image-materi/pemanasan.jpg",modules:[{moduleId:"module201",subTitle:"Efek Rumah Kaca",description:"Efek rumah kaca ialah proses pemanasan atmosfer bagian bawah oleh penyerapan radiasi gelombang pendek matahari dan pemantulan kembali. Disebut efek rumah kaca karena pemancaran kembali radiasi infra merah yang dihasilkan permukaan bumi oleh atmosfer menuju permukaan bumi kembali untuk menghangatkan bumi mirip terkurungnya radiasi infra merah yang dipancarkan kembali oleh tanah dan tanaman dalam rumah kaca.",completed:!1,completedAt:null},{moduleId:"module202",subTitle:"Pemanasan Global",description:"Atmosfer bumi terdiri dari berbagai macam dengan fungsi yang berbeda-beda. Kelompok gas yang secara alamiah menjaga agar permukaan bumi tetap hangat disebut dengan`gas rumah kaca`. Gas-gas termasuk gas rumah kaca diantaranya uap air, karbon dioksida, nitrogen oksida, freon, dan metana. Meningkatkanya gas rumah kaca di atmosfer berarti semakin banyak radiasi infra merah yang dipancarkan kembali oleh permukaan bumi terserap oleh gas-gas rumah kaca. Akibatnya suhu permukaan bumi semakin meningkat. Inilah yang disebut sebagai pemanasan global.",completed:!1,completedAt:null},{moduleId:"module203",subTitle:"Dampak Pemanasan Global",description:"Dampak pemanasan global secara umum adalah terjadinya peningkatan suhu ratarata di bumi. Namun, ada banyak sekali dampak yang terjadi akibat pemanasan global tersebut, baik itu iklim dan cuaca, peningkatan air laut, ekosistem, dan lainlain. Pemanasan Global mengakibatkan terjadinya perubahan iklim dan cuaca di berbagai penjuru dunia. Hal ini dikarenakan kondisi atmosfir yang berubah di berbagai lokasi akibat pemanasan global tersebut. Pemanasan global berdampak besar bagi semua mahluk hidup, termasuk hewan dan tumbuhan. Aktivitas manusia yang mengakibatkan pemanasan global akan membuat banyak hewan melakukan migrasi ke tempat lain.",completed:!1,completedAt:null},{moduleId:"module204",subTitle:"Perjanjian Internasional",description:"Perjanjian internasional yang pertama yaitu Protokol Montreal adalah sebuah traktat internasional yang dirancang untuk melindungi lapisan ozon dengan meniadakan produksi sejumlah zat yang diyakini bertanggung jawab atas berkurangnya lapisan ozon. Traktat ini terbuka untuk ditandatangani pada 16 September 1987 dan berlaku sejak 1 Januari 1989. Sejak itu, traktat ini telah mengalami lima kali revisi yaitu pada 1990 di London, 1992 di Kopenhagen, 1995 di Vienna, 1997 di Montreal dan 1999 di Beijing. Perjanjian internasional yang kedua yaitu Protokol Kyoto adalah sebuah amendemen terhadap Konvensi Rangka Kerja PBB tentang Perubahan Iklim (UNFCCC), sebuah persetujuan internasional tentang pemanasan global yang disepakati pada tahun 1997 di Jepang yang disepakatii 160 negara."}],progress:0},{courseId:"course103",title:"Dinamika Partikel",kelas:"11",joinClass:!1,completed:!1,image:"/images/image-materi/dinamika-partikel.jpg",modules:[{moduleId:"module301",subTitle:"Hukum 1 Newton",description:"Ilmuwan Yunani bernama Aristoteles membagi gerak menjadi 2 yaitu gerak alami dan gerak paksa. Dia menyatakan bahwa gerak alami ialah gerak yang tidak disebabkan oleh gaya. gerak alami di bumi contohnya gerak ke atas atau ke bawah. Sedangkan gerak paksa ialah gerak yang disebabkan oleh gaya. Contohnya adalah tarikan dan dorongan. Jika pada suatu benda yang bergerak tidak bekerja gaya luar, suatu saat benda itu akan kembali ke keadaan alaminya yaitu diam. Dari pernyataan Aristoteles tersebut memunculkan sebuah pertanyaan, benarkah bahwa suatu benda tidak mungkin mempertahankan geraknya? Galileo ialah orang yang pertama kali mengemukakan jawaban untuk pertanyaan diatas. Melalui percobaan menjatuhkan bola pada permukaan lengkung yang licin, Galileo menyatakan bahwa jika gesekan angin dan gesekan antarpermukaan dapat ditiadakan, kelajuan konstan benda pada lintasan lurus dapat terus dipertahankan tanpa memerlukan gaya dari luar. Jawaban Galileo ini memginspirasi Isaac Newton untuk menyatakan hukum pertamanya yang berbunyi: 'Jika resultan gaya pada suatu benda sama dengan nol, benda yang mula-mula diam akan tetap diam dan benda yang mula-mula bergerak akan terus bergerak dengan kecepatan konstan.' Berdasarkan hukum pertama ini, Newton menyimpulkan bahwa benda memiliki kecenderungan untuk mempertahankan geraknya (Inersia).",completed:!1,completedAt:null},{moduleId:"module302",subTitle:"Hukum 2 Newton",description:"Hukum I Newton berkaitan dengan gerak suatu benda ketika resultan gaya yang bekerja pada benda sama dengan nol (F = 0 Pada keadaan seperti ini, kecepatan benda adalah tetap atau benda mengalami gerak lurus beraturan. Kita katakan bahwa benda tidak mengalami percepatan atau percepatannya nol. Bagaimana jika pada benda bekerja sebuah gaya saja atau beberapa gaya yang resultannya tidak nol? Pada keadaan ini ternyata kecepatan benda selalu berubah. Kita katakan bahwa benda mengalami percepatan. Jelas bahwa ada kaitan antara resultan gan dengan percepatan yang ditimbulkannya. Kaitan antara percepatan dan tesultannya inilah yang diselidiki oleh Newton, sehingga a berhasil menceruskan hukum keduanya tentang gerak, yang dikenal sebagai hukum II Newton. Hukum II Newton berbunyi: Percepatan yang dihasilkan oleh resultan gaya yang bekerja pada benda berbanding lurus dengan resultan gayanya dan berbanding terbalik dengan massa benda.",completed:!1,completedAt:null},{moduleId:"module303",subTitle:"Hukum 3 Newton",description:"Newton menyatakan bahwa gaya tunggal yang hanya melibatkan satu benda tak mungkin ada. Gaya hanya hadir jika sedikitnya ada dua benda yang berinteraksi. Pada interaksi ini gaya-gaya selalu berpasangan. Jika A mengerjakan gaya pada B, maka B akan mengerjakan gaya pada A. Gaya pertama dapat Anda sebut sebagai aksi dan gaya kedua sebagai reaksi. Ini tidak berarti bahwa aksi bekerja lebih dahulu baru timbul reaksi. Kedua gaya ini terjadi bersamaan. Dengan demikian, tidak jadi masalah, gaya mana yang Anda anggap sebagai aksi dan gaya mana yang Anda anggap sebagai reaksi. 'Jika A mengerjakan gaya pada B, maka B akan mengerjakan gaya pada A, yang besarnya sama tetapi arahnya berlawanan'. Hukum ini kadang-kadang dinyatakan sebagai berikut.'Untuk setiap aksi, ada suatu reaksi yang sama besar, tetapi berlawanan arah.'",completed:!1,completedAt:null},{moduleId:"module304",subTitle:"Jenis-Jenis Gaya",description:"Dalam konsep fisika gaya ialah tarikan atau dorongan yang dialami oleh benda. Ada empat jenis gaya yang bekerja pada suatu benda yaitu (1) gaya berat, (2) gaya normal, (3) gaya gesek, dan (4) gaya tegangan tali. Gaya berat  atau 'berat' ialah gaya gravitasi bumi yang bekerja pada benda. Berat disini berbeda definisinya dengan massa. 'Massa' ialah ukuran kelembaman atau inersia yang dimiliki oleh benda. Namun keduanya saling berhubungan. Semakin besar massa yang dimiliki benda semakin berat pula benda tersebut. Gaya normal didefinisikan sebagai gaya yang bekerja pada bidang sentuh antara 2 permukaan yang bersentuhan, yang arahnya selalu tegak lurus terhadap bidang sentuh. Sedangkan gaya gesek, ia mirip dengan gaya normal yaitu sama-sama bekerja pada bidang sentuh antara 2 benda. Perbedaannya, arah gaya gesek searah dengan permukaan bidang sentuh dan berlawanan dengan kecenderungan arah gerak benda. Terakhir ialah gaya tegangan tali. Gaya ini bekerja pada ujung-ujung tali karena tali tersebut tegang."}],progress:0},{courseId:"course104",title:"Fluida Statis",kelas:"11",joinClass:!1,completed:!1,image:"/images/image-materi/fluida-statis.jpg",modules:[{moduleId:"module401",subTitle:"Tekanan",description:"Tekanan didefinisikan sebagai gaya normal yang bekerja pada suatu bidang dibagi  dengan luas permukaan bidang tersebut. Tekanan yang dialami benda ketika di udara dan di air itu berbeda. Tekanan yang dialami oleh benda yang berada di medium udara dinamakan tekanan udara atau tekanan atmosfer. Jika suatu benda berada dalam wadah yang berisi zat cair, tekanan yang dialami oleh benda tersebut dipengaruhi oleh massa jenis zat cair, kedalaman benda, dan gaya gravitasi. Tekanan yang dialami benda ketika berada dalam zat cair dinamakan tekanan hidrostatis.",completed:!1,completedAt:null},{moduleId:"module402",subTitle:"Hukum Pascal",description:"Ketika anda memeras ujung kantong plastik berisi air yang memiliki banyak lubang, air akan memancar  dari setiap lubang dengan sama kuat. Hasil percobaan ini diamati oleh 'Blaise Pascal' yang kemudian menyimpulkannya dalam hukum pascal yang berbunyi: 'Tekanan yang diberikan pada zat cair dalam ruang tertutup diteruskan sama besar ke segala arah'. Contoh penerapan dari hukum pascal ialah dongkrak hidrolik. Dongkrak hidrolik terdiri atas bejana dengan dua kaki yang masing-masing berisi penghisap. Penghisap 1 dan Penghisap 2 masing-masing memiliki ukuran diameter yang berbeda. Selain dongkrak hidrolik, beberapa penerapan dari hukum pascal ialah pompa hidrolik ban sepeda dan mesin hidrolik pengangkat mobil.",completed:!1,completedAt:null},{moduleId:"module403",subTitle:"Hukum Archimedes",description:"Ketika benda dicelupkan ke dalam zat cair, maka benda akan berada diantara 3 keadaan berikut: (1) mengapung, (2) melayang dan  (3) tenggelam. Keadaan yang dialami oleh benda tersebut dikarenakan adanya gaya apung atau gaya angkat ke atas oleh sebuah fluida. Munculnya gaya apung ialah konsekuensi dari tekanan zat cair yang meningkat seiring bertambahnya kedalaman. Fenomena ini pertama kali diamati oleh Archimedes. Archimedes mengamati bahwa pada bejana yang diisi penuh oleh air,kemudian dimasukkan benda ke dalam air tersebut, maka akan ada sejumlah volume air yang dipindahkan. Ternyata setelah diukur jumlah volume air yang dipindahkan itu sama dengan volume benda yang dicelupkan. Archimedes kemudian menemukan hukumnya yang terkenal yang berbunyi: 'Gaya angkat yang bekerja pada suatu benda yang dicelupkan sebagian atau seluruhnya ke dalam suatu fluida sama dengan berat benda yang dipindahakan ke fluida tersebut.'",completed:!1,completedAt:null},{moduleId:"module404",subTitle:"Tegangan Permukaan",description:"Tegangan permukaan zat cair adalah kecenderungan permukaan zat cair untuk menegang, sehingga permukaannya seperti ditutupi oleh suatu lapisan elastis. Mengapa hal ini  bisa terjadi ? Pertanyaan bagus! Seperti yang kita ketahui bahwa partikel-partikel yang sejenis terdapat gaya tarik-menarik yang disebut 'gaya kohesi'. Coba bayangkan kondisi ini. Terdapat 2 buah partikel yang sebut saja partikel A dan B. Partikel A berada di dalam air, sedangkan partikel B berada tepat di permukaan air. Partikel A karena berada di dalam air, ia akan ditarik oleh partikel yang ada disekitarnya dari segala arah. Sebagai hasilnya resultan gaya partikel A sama dengan nol. Pada partikel B ia juga mengalami situasi yang sama. Partikel B juga ditarik oleh partikel-partikel disekitarnya  yaitu dari bawah, kiri, dan kanan. Sedangkan dari atas tidak ada gaya tarik karena diatas partikel B ialah udara. Sebagai hasilnya resultan gaya pada partikel B ialah ke bawah. Resultan ini menyebabkan lapisan atas seakan-akan tertutup oleh hamparan selaput elastis yang ketat. Fenomena inilah yang disebut sebagai 'tegangan permukaan'.",completed:!1,completedAt:null}],progress:0},{courseId:"course105",title:"Listrik Statis",kelas:"12",joinClass:!1,completed:!1,image:"/images/image-materi/listrik.jpg",modules:[{moduleId:"module501",subTitle:"Muatan Listrik",description:"Apa itu muatan listrik? Apa yang dimaksud dengan Q Anda tentunya sudah sangat paham bahwa muatan listrik adalah muatan dasar suatu benda yang membuatnya mengalami gaya pada benda lain yang berdekatan dan memiliki muatan listrik. Muatan listrik diberi simbol Q, dan satuannya adalah Coulumb (C). Jika muatan listrik didekatkan dengan muatan listrik sejenis (positif-positif, dan negatif-negatif), interaksi yang terjadi yakni saling tolak-menolak. Sedangkan ketika suatu muatan listrik didekatkan dengan muatan listrik tak sejenis (positif-negatif), maka akan terjadi tarik-menarik. Lalu bagaimana sisir plastik yang digosokkan dapat menarik sobekan-sobekan kertas kecil? Setelah mengetahui sifat-sifat muatan listrik. Kita dapat lebih mudah memahami bagaimana sisir tersebut menarik sobekan-sobekan kertas. Perlu diketahui bahwa sebelum sisir digosokkan dengan rambut secara satu arah, sisir tidak bermuatan listrik, Sisir yang tidak bermuatan listrik tersebut belum bisa menarik sobekan-sobekan kertas.",completed:!1,completedAt:null},{moduleId:"module502",subTitle:"Gaya Coulomb",description:"Anda sudah mengetahui bahwa sebuah muatan (𝑞1) akan menimbulkan interaksi tarik-menarik atau tolak menolak pada muatan lainnya (𝑞2) yang berada cukup dekat dengan muatan 𝑞1. Interaksi tarik-menarik dan tolakmenolak tersebut disebut gaya listrik (𝐹). Lalu bagaimana hubungan antara gaya listrik dengan kedua muatan dan jarak antar kedua muatan tersebut? Melalui eksperimen gaya Coulomb, maka akan didapat hubungan antara besar gaya Coulomb dengan jarak antar muatan dan besar muatan. Hasil analisis data dari eksperimen tersebut menunjukkan bahwa besar gaya Coulomb sebanding dengan perkalian kedua muatan dan berbanding terbalik dengan kuadrat jarak antara kedua muatan tersebut.",completed:!1,completedAt:null},{moduleId:"module503",subTitle:"Medan Listrik",description:"Ketika Anda mendekatkan sisir atau penggaris plastik pada potongan kertas kecil, maka beberapa potongan kertas akan menempel pada sisir atau penggaris. Nah, bagaimana ketika sisir atau penggaris dijauhkan? Ternyata terdapat suatu wilayah di sekitar sisir atau penggaris plastik tersebut tersebut yang masih dapat terpengaruh oleh gaya listrik. Tempat di sekitar muatan listrik yang masih dipengaruhi gaya listrik itu merupakan medan listrik. Medan listrik adalah daerah di sekitar partikel bermuatan listrik yang masih dipengaruhi gaya Coulumb. Benda bermuatan yang menghasilkan medan listrik dinamakan muatan sumber. Muatan lain yang diletakkan dalam pengaruh medan listrik muatan sumber dinamakan muatan uji.",completed:!1,completedAt:null},{moduleId:"module504",subTitle:"Hukum Gauss",description:"Medan listrik divisualisasikan dengan menggunakan garis khayal medan listrik. Garis-garis medan listrik adalah garis bersambungan yang selalu mengarah menuju massa sumber medan listrik.  Semakin banyak garis-garis medan listrik, maka semakin kuat medan listriknya. Hukum Gauss yang menjelaskan tentang jumlah garis-garis gaya listrik (fluks listrik) yang menembus suatu permukaan tertutup, sama dengan jumlah muatan listrik yang dilingkupi oleh permukaan tertutup dibagi dengan pemitivitas udara ɛ0. Hukum Gauss dapat digunakan untuk menghitung kuat medan listrik dari suatu sistem muatan konduktor bersimetri tinggi, seperti konduktor dua keping sejajar dan konduktor bola berongga.",completed:!1,completedAt:null}],progress:0},{courseId:"course106",title:"Relativitas",kelas:"12",joinClass:!1,completed:!1,image:"/images/image-materi/relativitas.jpg",modules:[{moduleId:"module601",subTitle:"Relativitas Newton",description:"Teori Relativitas Newton menjelaskan gerak-gerak benda jauh di bawah kecepatan cahaya. Teori relativitas mempelajari bagaimana pengukuran besaran fisika yang bergantung pada pengamat seperti halnya dengan peristiwa yang diamati. Relativitas merupakan salah satu dari beberapa teori mengenai gerak, yang dirancang untuk menjelaskan penyimpangan dari mekanika Newton yang timbul akibat gerak relative yang sangat cepat. Teori ini telah mengubah pandangan kita mengenai ruang, waktu, massa, energi, gerak, dan gravitasi. Teori relativitas Newton terdiri atas teori khusus dan teori umum, yang keduanya bertumpu pada dasar matematika yang kuat dan keduanya telah diuji dengan percobaan-percobaan dan pengamatan. Newton mengatakan bahwa semua  gerak itu relatif. Benda akan dikatakan bergerak apabila kedudukan benda tersebut berubah terhadap kerangka acuannya. Kerangka acuan di mana Hukum Newton berlaku disebut kerangka acuan inersia. Jika kita memiliki dua kerangka acuan inersia yang bergerak dengan kecepatan konstan relatif terhadap yang lainnya, maka tidak dapat ditentukan bagian mana yang diam dan bagian mana yang bergerak atau keduanya bergerak. Galileo dan Newton mengemukakan tentang apa yang sekaran kita sebut sebagai prinsip relativitas Newton, yaitu hukum – hukum mekanika berlaku sama pada semua kerangka acuan inersial.",completed:!1,completedAt:null},{moduleId:"module602",subTitle:"Relativitas Khusus",description:"Teori relativitas Einstein merujuk pada kerangka acuan inersial yaitu kerangka acuan yang bergerak relatif pada kecepatan konstan (tetap) terhadap kerangka acuan lainnya. Dari hasil kajiannya, Einstein mengemukakan dua postulat, yaitu: 1. Hukum-hukum fisika memiliki bentuk yang sama pada semua kerangka acuan inersial. 2. Cahaya yang merambat di ruang hampa dengan kecepatan c = 3 x 108 m/s adalah sama untuk semua pengamat dan tidak bergantung pada gerak sumber cahaya maupun kecepatan pengamat. Postulat pertama didasarkan pada tidak adanya kerangka acuan umum yang diam mutlak, sehingga tidak dapat ditentukan mana yang dalam keadaan diam dan mana yang dalam keadaan bergerak. Misalnya, seseorang berinisial A berada di dalam pesawat dan seseorang berinisial B berada di permukaan bumi. Dari sudut pandang A, pesawat diam pada suatu tempat dan permukaan bumi-lah yang bergerak. Sedangkan dari sudut pandang B, permukaan bumi tempat dia berpijak yang tetap diam dan pesawat dengan berisi si A didalamnya yang bergerak. Postulat kedua menyatakan bahwa kecepatan cahaya c konstan, tidak bergantung pengamat yang mengukur dari kerangka acuan inersia. Segala pengukuran harus dibandingkan dengan kecepatan cahaya dan tidak ada kecepatan yang lebih besar dari kecepatan cahaya.",completed:!1,completedAt:null},{moduleId:"module603",subTitle:"Transformasi Lorentz",description:"Pada transformasi Galileo telah dikemukakan bahwa selang waktu pengamatan terhadap suatu peristiwa yang diamati oleh pengamat yang diam dengan pengamat yang relatif bergerak terhadap peristiwa adalah sama (t - t’). Hal inilah yang menurut Einstein tidak benar, selang waktu pengamatan antara pengamat yang diam dan pengamat yang bergerak relatif adalah tidak sama (t ≠ t’). Transformasi Lorentz pertama kali dikemukaan oleh Hendrik A. Lorentz, seorang fisikawan dari Belanda  pada tahun 1895. Persamaan-persamaan penjumlahan kecepatan transformasi Lorentz kemudian dikenal dengan penjumlahan kecepatan menurut teori relativitas Einstein. Persamaan tersebut di atas merupakan rumus kecepatan benda yang diamati oleh pengamat yang diam yang disebut rumus penambahan kecepatan relativistik yang sesuai dengan teori relativitas Einstein. ",completed:!1,completedAt:null},{moduleId:"module604",subTitle:"Dilatasi Waktu",description:"Menurut Einstein bahwa waktu adalah sesuatu yang relatif. Di dalam suatu kerangka acuan yang bergerak terhadap seorang pengamat yang diam terdapat lonceng yang menunjukkan selang waktu ∆to. Selang waktu yang diamati oleh pengamat tersebut adalah  ∆t lebih lambat dari pada ∆to. Beda waktu yang merupakan perpanjangan waktu pengamatan  bagi pengamat diamdisebut dilatasi waktu. Dalam teori relativitas Einstein, dilatasi waktu dalam dua keadaan ini dapat diringkas yaitu: Dalam relativitas khusus (atau, hipotetis jauh dari semua massa gravitasi), jam yang bergerak terhadap sistem inersia pengamatan diukur akan berjalan lebih lambat. Efek ini dijelaskan dengan tepat oleh transformasi Lorentz.   Dalam relativitas umum, jam pada posisi dengan potensial gravitasi yang lebih rendah seperti dalam jarak dekat ke planet yang ditemukan akan berjalan lebih lambat.",completed:!1,completedAt:null}],progress:0}],gamification:{point:0,badges:{smart:"Smart",intelligent:"Intelligent",expert:"Expert",genius:"Genius",wisdom:"Wisdom"},level:1,icon:{smart:"/images/icon-level/star-medal_1.png",intelligent:"/images/icon-level/star-medal_2.png",expert:"/images/icon-level/star-medal_3.png"}}},W="MODULES";function Y(){return typeof Storage>"u"?(alert("Browser kamu tidak mendukung local storage"),!1):!0}function z(e){if(!Y||typeof e!="object"){console.log("local storage tidak tersedia atau data bukan objek: ",e);return}try{localStorage.setItem(W,JSON.stringify(e))}catch(a){console.error("gagal menyimpan data ke local storage: ",a)}}function U(){if(Y)try{const e=localStorage.getItem(W);return e?JSON.parse(e):null}catch(e){return console.error("Gagal mengambil data dari local storage: ",e),localStorage.removeItem(W),null}}function ra(){if(!Y)return console.log("localStorage tidak tersedia atau belum digunakan"),{bytes:0,KB:0,MB:0};let e=0;for(let t in localStorage)localStorage.hasOwnProperty(t)&&(e+=(t.length+localStorage[t].length)*2);const a=e/1024,n=a/1024;return console.log(`Total ukuran localStorage: ${e} bytes`),console.log(`Total ukuran localStorage: ${a.toFixed(2)} KB`),console.log(`Total ukuran localStorage: ${n.toFixed(2)} MB`),{bytes:e,KB:a,MB:n}}const K={async getAllModules(){const e=U();return console.log("data dari localStorage: ",e),e?(r.data=e.data||r.data,r.gamification=e.gamification||r.gamification,console.log("gamification: ",r.gamification)):z({...r}),r.gamification.point>=100&&r.gamification.point<150?r.gamification.level=2:r.gamification.point>=150&&r.gamification.point<250?r.gamification.level=3:r.gamification.level=1,z({...r}),ra(),{...r}},async setToMyCourse(e){const a=r.data.findIndex(n=>n.courseId===e);return a!==-1?(r.data[a].joinClass=!0,z({...r}),{status:"success",message:"Menambahkan course berhasil",data:r.data[a]}):{status:"error",message:"course tidak ditemukan"}},async getMyCourses(){const e=U();let a=[];return e&&e.data?a=e.data.filter(n=>n.joinClass===!0):a=r.data.filter(n=>n.joinClass===!0),{status:"success",message:"Daftar kursus yang digabung",data:a}},async getDetailMyCourse(e){const a=U();a&&(r.data=a.data||r.data,r.gamification=a.gamification||r.gamification);const n=r.data.find(t=>t.courseId===e);return n?{status:"success",message:"course ditemukan",data:n}:{status:"failed",message:"course tidak ditemukan"}},async updateModuleToComplete(e,a){const n=r.data.findIndex(t=>t.courseId===e);if(n!==-1){const t=r.data[n].modules.findIndex(i=>i.moduleId===a);if(t!==-1){const i=new Date().toISOString();r.data[n].modules[t]={...r.data[n].modules[t],completed:!0,completedAt:i};const s=r.data[n].modules.length,d=r.data[n].modules.filter(m=>m.completed).length;return r.data[n].progress=s>0?Math.round(d/s*100):0,r.data[n].progress===100&&r.data[n].completed!==!0?(r.gamification.point+=50,r.data[n].completed=!0):r.data[n].progress===100&&r.data[n].completed===!0&&(r.gamification.point+=0),z({...r}),{status:"success",message:`Modul ${a} ditandai selesai. Progress: ${r.data[n].progress}%`}}}return{status:"failed",message:"Modul atau kursus tidak ditemukan"}}};function la(e,a){return e.modules.map(n=>`
    <li class="block p-2 rounded-md ${n.moduleId===a?"bg-neutral text-neutral-content":"text-neutral"}">
      <a href="#/my-class/${e.courseId}/module/${n.moduleId}" class="flex justify-between items-center">${n.subTitle} ${n.completed?"<i class='icon-[fluent--checkmark-circle-32-regular]'></i>":""}</a>
    </li>
    `).join("")}function da(e){return`
        <input id="my-drawer" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content">
            <label for="my-drawer" class="btn btn-ghost">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" />
                </svg>
            </label>
        </div>
        <div class="drawer-side">
            <label for="my-drawer" aria-label="close sidebar" class="drawer-overlay"></label>
            <ul class="menu bg-base-200 text-base-content min-h-full w-80 flex flex-col gap-y-3 pt-3">
                <li><a href="#/" class="${e==="dashboard"?"text-neutral bg-neutral-content":""}">Dashboard</a></li>
                <li><a href="#/list-class" class="${e==="/list-class"?"text-neutral bg-neutral-content":""}">Daftar Kelas</a></li>
                <li><a href="#/my-class/my" class="${e==="/my-class/my"?"text-neutral  bg-neutral-content":""}">Kelas Saya</a></li>
            </ul>
        </div>
    `}function ua(e){return`
        <ul class="menu menu-horizontal px-1 text-base flex gap-x-3">
            <li><a href="#/" class="${e==="dashboard"?"bg-neutral-content":""}">Dashboard</a></li>
            <li><a href="#/list-class" class="${e==="/list-class"?"bg-neutral-content":""}">Daftar Kelas</a></li>
            <li><a href="#/my-class/my" class="${e==="/my-class/my"?"bg-neutral-content":""}">Kelas Saya</a></li>
        </ul>
    `}function oa(){return`
        <span class="flex items-center gap-x-2 font-semibold">
            <span class="icon-[fluent-color--star-48] text-xl"></span>
            <p><span id="xp-point">50</span> XP</p>
        </span>
    `}function V({courseId:e,image:a,title:n,kelas:t}){return`
        <div class="card bg-base-100 w-full shadow-sm lg:w-72" data-courseId="${e}">
            <figure>
                <img src="${a}" alt="image-course"/>
            </figure>
            <div class="card-body flex flex-col gap-y-5">
                <h3 class="card-title text-xl font-bold">${n}</h3>
                <p class="text-base">Kelas ${t}</p>
                <div class="card-actions justify-start">
                    <button id="btn-kelas-${e}" class="btn btn-neutral btn-outline flex items-center">Gabung kelas <i class="icon-[fluent--people-community-48-filled]"></i></button>
                </div>
            </div>
        </div>
    `}function ma({courseId:e,image:a,title:n,kelas:t}){return`
        <div class="card bg-base-100 w-full shadow-sm lg:w-72" data-courseId="${e}">
            <figure>
                <img src="${a}" alt="image-course" class="vt-item-image"/>
            </figure>
            <div class="card-body flex flex-col gap-y-5">
                <h3 class="card-title text-xl font-bold">${n}</h3>
                <p class="text-base">Kelas ${t}</p>
                <div class="flex flex-col gap-y-2">
                    <progress id="progress-${e}" class="progress progress-neutral w-56" value="" max="100"></progress>
                    <span id="percentage-${e}"></span>
                </div>
                <div class="card-actions justify-start">
                    <a href="#/my-class/${e}/corridor" class="btn btn-neutral flex items-center card-btn"></a>
                </div>
            </div>
        </div>
    `}function ga(){return`
    <div class="w-full text-center mt-30">
      <h3 class="text-2xl mb-5 font-bold">Course sedang kosong</h3>
      <p class="text-xl">Kamu masih tidak memiliki course untuk dipelajari</p>
    </div>
  `}function ca(e){return`
    <div class="w-[80vw] flex flex-col gap-y-5 border border-base-300 rounded-b-2xl box-border">
      <figure class="w-full h-48 overflow-y-hidden bg-center">
        <img src="${e.image}" alt="course image" class="vt-detail-image">
      </figure>
      <div class="flex justify-between mx-5 mt-5">
        <h3 class="text-2xl font-bold">${e.title}</h3>
        <a id="btn-learn" href="#/my-class/${e.courseId}/module/${e.modules[0].moduleId}" class="btn btn-neutral">Mulai belajar</a>
      </div>
      <div class="card card-border bg-base-100 mx-5 mb-10">
        <div class="card-body">
            <div class="flex justify-between w-full">
                <p class="text-lg">Progress belajar</p>
                <span id="percentage" class="text-lg">${e.progress}%</span>
            </div>
            <progress class="progress progress-neutral w-full" value="${e.progress}" max="100"></progress>
        </div>
      </div>
    </div>
    `}function ka(e,a){const n=la(e,a),t=e.modules.find(d=>d.moduleId===a),i=t?t.description:"Deskripsi tidak tersedia",s=e.progress||0;return`
    <div class="flex">
      <div>
        <div>
          <div class="fixed w-full h-20 border-b bg-base-100 border-base-300 z-50 flex justify-between items-center gap-x-5 px-5">
            <a href="#/my-class/${e.courseId}/corridor" class="text-neutral flex items-center lg:w-96 lg:gap-x-3">
              <i>
                <svg class="rotate-90" xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path fill="currentColor" d="m11.65 4.007l.1-.007a.75.75 0 0 1 .744.648l.007.102l-.001 12.696l3.22-3.221a.75.75 0 0 1 .976-.073l.084.072a.75.75 0 0 1 .073.977l-.072.084l-4.497 4.5a.75.75 0 0 1-.976.073l-.084-.073l-4.504-4.5a.75.75 0 0 1 .976-1.133l.084.072L11 17.442V4.75a.75.75 0 0 1 .65-.743l.1-.007z"/></svg>
              </i>
              <span class="hidden lg:inline-block lg:text-xl lg:font-bold">${e.title}</span>
            </a>
            <button id="drawer-sidebar" class="text-neutral lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </button>
          </div>
        </div>
        <button id="open-sidebar" class="text-base-100 py-3 px-5 top-32 left-0 rounded-r-full absolute bg-primary cursor-pointer hidden transition-all duration-300 transform translate-x-0 lg:z-50">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16"/>
          </svg>
        </button>
        <aside id="default-sidebar" class="-translate-x-[100%] w-full absolute top-0 duration-300 lg:translate-x-0 lg:w-3/12" aria-label="Sidebar">
          <div class="h-screen overflow-y-auto bg-base-100 border-r-2 border-base-300 pt-24">
            <div class="text-neutral p-2 flex items-center justify-between mb-5">
              <h3 class="text-xl font-bold">Daftar Modul</h3>
              <button id="close-sidebar" class="text-primary cursor-pointer hidden lg:block">
                <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 48 48"><path fill="currentColor" d="M44 24c0 11.046-8.954 20-20 20S4 35.046 4 24S12.954 4 24 4s20 8.954 20 20m-19.866 8.634a1.25 1.25 0 0 0 0-1.768l-5.616-5.616H32.75a1.25 1.25 0 1 0 0-2.5H18.518l5.616-5.616a1.25 1.25 0 0 0-1.768-1.768l-7.75 7.75a1.25 1.25 0 0 0 0 1.768l7.75 7.75a1.25 1.25 0 0 0 1.768 0"/></svg>
              </button>
            </div>
            <div class="border-t border-b border-base-300 p-5">
              <div class="w-full">
                <progress id="progress-bar" class="progress progress-primary mb-1" value="${s}" max="100">
                </progress>
                <div class="flex justify-between">
                  <span class="hidden lg:inline-block text-primary text-sm">Progress</span>
                  <span id="percentage" class="hidden md:inline-block text-primary text-sm">${s}%</span>
                </div>
              </div>
            </div>
            <ul class="space-y-2 font-medium p-5">
              ${n}
            </ul>
          </div>
        </aside>
        <div class="h-screen overflow-y-scroll">
          <div id="content" class="w-full p-4 flex justify-end transition-all duration-300">
            <div class="bg-base-100 p-6 w-full mt-24 mb-2 lg:w-8/12 lg:mx-13">
              <div class="lg:mb-5">
                <h4 class="text-3xl font-semibold mb-4">Deskripsi</h4>
                <p class="text-lg leading-8 tracking-wide">${i}</p>
              </div>
              <button id="module-completed" class="btn btn-primary mt-4">Saya sudah paham</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `}function pa(e){return`
    <div class="card bg-white w-96 shadow-sm">
      <figure class="px-10 pt-10 flex flex-col">
        <img src="${e.icon.smart}" alt="Shoes" class="rounded-xl w-28" />
        <figcaption class="flex flex-col justify-center items-center font-bold">
          </p>Level ${e.level}</p>
          <p>${e.badges.smart}</p>
        </figcaption>
      </figure>
      <div class="card-body items-center text-center">
        <div class="flex flex-col items-start gap-y-2">
          <progress class="progress progress-info w-56" value="${e.point}" max="100"></progress>
          <p id="percentage"><span>${e.point}</span>/<span>100</span> poin</p>
        </div>
        <p>kumpulkan <span class="font-bold">${100-e.point} poin</span> lagi untuk naik ke level selanjutnya</p>
      </div>
    </div>
  `}function ba(e){return`
    <div class="card bg-warning w-96 shadow-sm">
      <figure class="px-10 pt-10 flex flex-col">
        <img src="${e.icon.intelligent}" alt="Shoes" class="rounded-xl w-28" />
        <figcaption class="flex flex-col justify-center items-center font-bold">
        <p>Level ${e.level}</p>
        <p>${e.badges.intelligent}</p>
        </figcaption>
      </figure>
      <div class="card-body items-center text-center">
        <div class="flex flex-col items-start gap-y-2">
          <progress class="progress progress-neutral w-56" value="${e.point}" max="200"></progress>
          <p id="percentage"><span>${e.point}</span>/<span>200</span> poin</p>
        </div>
        <p>kumpulkan <span class="font-bold">${200-e.point} poin</span> lagi untuk naik ke level selanjutnya</p>
      </div>
    </div>
  `}function ha(e){return`
    <div class="card bg-info w-96 shadow-sm">
      <figure class="px-10 pt-10 flex flex-col">
        <img src="${e.icon.expert}" alt="Shoes" class="rounded-xl w-28" />
        <figcaption class="flex flex-col justify-center items-center font-bold">
          <p>Level ${e.level}</p>
          <p>${e.badges.expert}</p>
        </figcaption>
      </figure>
      <div class="card-body items-center text-center">
        <div class="flex flex-col items-start gap-y-2">
          <progress class="progress progress-secondary w-56" value="${e.point}" max="350"></progress>
          <p id="percentage"><span>${e.point}</span>/<span>350</span> poin</p>
        </div>
        <p>kumpulkan <span class="font-bold">${350-e.point} poin</span> lagi untuk naik ke level selanjutnya</p>
      </div>
    </div>
  `}function ya({courseId:e,image:a,title:n,kelas:t,progress:i}){return`
    <div class="bg-white shadow-sm rounded-xl box-border p-5">
      <figure class="flex gap-x-3 items-center p-3">
        <img src="${a}" class="w-24 rounded-2xl">
        <figcaption class="flex flex-col gap-y-2">
          <h3 class="text-lg font-semibold line-clamp-1">${n}</h3>
          <h4>${t}</h4>
        </figcaption>
      </figure>
      <div class="p-3">
        <div class="w-full bg-info rounded-full">
          <div class="bg-info-content text-xs font-medium text-blue-100 text-center p-0.5  leading-none rounded-full" style="width: ${i}%"> ${i}%</div>
        </div>
      </div>
      <div class="px-3 flex justify-end">
        <a href="#/my-class/${e}/corridor" class="text-info-content">Lanjut belajar</a>
      </div>
    </div>
  `}function fa(){return`
    <div class="h-40 bg-neutral-content shadow-sm rounded-xl text-center box-border p-3 flex flex-col justify-center text-neutral gap-y-2">
      <h3 class="text-lg font-semibold">Modul kosong</h3>
      <p>Saat ini kamu sedang tidak mempelajari apapun</p>
    </div>
  `}function va({courseId:e,image:a,title:n,kelas:t,progress:i}){return`
    <div class="bg-white shadow-sm rounded-xl box-border p-5">
      <figure class="flex gap-x-3 items-center p-3">
        <img src="${a}" class="w-24 rounded-2xl">
        <figcaption class="flex flex-col gap-y-2">
          <h3 class="text-lg font-semibold line-clamp-1">${n}</h3>
          <h4>${t}</h4>
        </figcaption>
      </figure>
      <div class="p-3">
        <div class="w-full bg-base-200 rounded-full">
          <div class="bg-success-content text-xs font-medium text-blue-100 text-center p-0.5  leading-none rounded-full" style="width: ${i}%"> ${i}%</div>
        </div>
      </div>
      <div class="px-3 flex justify-end">
        <a href="#/my-class/${e}/corridor" class="text-success-content">Belajar ulang</a>
      </div>
    </div>
  `}function wa(){return`
    <div class="h-40 bg-neutral-content shadow-sm rounded-xl text-center box-border p-3 flex flex-col justify-center text-neutral gap-y-2">
      <h3 class="text-lg font-semibold">Modul kosong</h3>
      <p>Saat ini kamu belum menyelesaikan modul apapun</p>
    </div>
  `}var I;class xa{constructor(){u(this,I)}async render(){return`
    <div class="mx-5 mt-32">
      <div id="card-level" class="flex justify-center mb-10">
      </div>
      <div class="my-20">
        <div>
          <h2 class="mb-5 text-xl font-bold md:mx-5">Sedang dipelajari</h2>
          <div id="continue-learning"></div>
        </div>
      </div>
      <div class="my-20">
        <div>
          <h2 class="mb-5 text-xl font-bold md:mx-5">Sudah dipelajari</h2>
          <div id="finished-learning"></div>
        </div>
      </div>
    </div>
    `}async afterRender(){o(this,I,new sa({view:this,model:K})),l(this,I).initialDashboard();const a=document.querySelector("header");a&&(a.style.display="block")}populateLearningDashboardList(a){const n=a.filter(i=>i.progress>0&&i.progress<100).reduce((i,s)=>i.concat(ya({...s})),""),t=a.filter(i=>i.progress===100).reduce((i,s)=>(console.log("course module length: ",s.modules.length),i.concat(va({...s}))),"");console.log("continue learning: ",n.length),document.getElementById("continue-learning").innerHTML=n.length>0?`<div class="grid gap-y-3 md:grid-cols-2 md:gap-x-10 md:mx-5 lg:grid-cols-3">${n}</div>`:`<div class="md:mx-5">${fa()}</div>`,document.getElementById("finished-learning").innerHTML=t.length>0?`<div class="grid gap-y-3 md:grid-cols-2 md:gap-x-10 md:mx-5 lg:grid-cols-3">${t}</div>`:`<div class="md:mx-5">${wa()}</div>`}levelLearningDashboard(a){if(a.point>=0&&a.point<100)return document.getElementById("card-level").innerHTML=pa(a);if(a.point>=100&&a.point<200)return document.getElementById("card-level").innerHTML=ba(a);if(a.point>=200&&a.point<350)return document.getElementById("card-level").innerHTML=ha(a)}}I=new WeakMap;var M,y;class ja{constructor({view:a,model:n}){u(this,M);u(this,y);o(this,M,a),o(this,y,n)}async initialListModule(){const a=await l(this,y).getAllModules();if(!a){console.log("response tidak ditemukan!");return}l(this,M).populateListModules(a.message,a.data)}async setMyCourse(a){await l(this,y).setToMyCourse(a),a||console.log("courseId tidak ditemukan")}}M=new WeakMap,y=new WeakMap;var c;class Ia{constructor(){u(this,c)}async render(){return`
    <div class="mt-20">
        <section>
            <div id="jumbotron" class="w-full h-60 bg-primary flex items-center justify-center p-4">
              <form id="search-course" class="w-full">
                <div class="flex flex-col items-center gap-y-5">
                  <h2 class="text-xl font-bold text-base-100 text-center">Pilih materi yang mau kamu pelajari</h2>
                  <div class="flex gap-x-3">
                    <label class="input md:w-96">
                      <svg class="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <g
                          stroke-linejoin="round"
                          stroke-linecap="round"
                          stroke-width="2.5"
                          fill="none"
                          stroke="currentColor"
                        >
                          <circle cx="11" cy="11" r="8"></circle>
                          <path d="m21 21-4.3-4.3"></path>
                        </g>
                      </svg>
                      <input id="search-title" type="text" required placeholder="Cari course" />
                    </label>
                    <button id="search-submit" type="submit" class="btn bg-primary-content text-primary">Cari Course</button>
                  </div>
                </div>
              </form>
            </div>

            <div id="class-list__container" class="">
                <div id="class-list__select" class="w-full my-5">
                    <fieldset class="fieldset flex justify-center md:justify-start md:mx-5">
                        <select id="select" class="select">
                            <option disabled selected class="">Pilih kelas</option>
                            <option value="10">Kelas 10</option>
                            <option value="11">Kelas 11</option>
                            <option value="12">Kelas 12</option>
                        </select>
                    </fieldset>
                </div>

                <div class="w-full px-5">
                  <div id="class-list__item" class="grid gap-y-8 gap-x-5 my-10 md:grid-cols-3 lg:grid-cols-4"></div>
                </div>
            </div>
        </section>
    </div>
    `}async afterRender(){o(this,c,new ja({view:this,model:K})),await l(this,c).initialListModule();const a=document.querySelector("header");a&&(a.style.display="block")}populateListModules(a,n){const t=n.reduce((d,m)=>d.concat(V({...m})),"");document.getElementById("class-list__item").innerHTML=t;const i=document.getElementById("select"),s=document.getElementById("class-list__item");i.addEventListener("change",()=>{const d=i.value;this.getCoursesByClass(d,n,s)}),n.map(d=>{document.querySelector(`#btn-kelas-${d.courseId}`).addEventListener("click",()=>{console.log("courseId: ",d),l(this,c).setMyCourse(d.courseId),l(this,c).initialListModule()})}),document.getElementById("search-course").addEventListener("submit",d=>{let m=document.getElementById("search-title").value.toLowerCase();console.log("searchInput: ",m),d.preventDefault(),this.searchCourse(m,n,s),d.target.reset()})}getCoursesByClass(a,n,t){let i=a?n.filter(s=>s.kelas===a):n;if(console.log("filterClass: ",i),i.length>0){const s=i.reduce((d,m)=>d.concat(V({...m})),"");t.innerHTML=s}}searchCourse(a,n,t){console.log("filterCourse: ",typeof n);let i=n.filter(s=>s.title.toLowerCase().includes(a));if(console.log("courseTitle: ",i),i.length>0){const s=i.reduce((d,m)=>d.concat(V({...m})),"");t.innerHTML=s}}}c=new WeakMap;var L,T;class Ma{constructor({view:a,model:n}){u(this,L);u(this,T);o(this,L,a),o(this,T,n)}async initialMyListModule(){const a=await l(this,T).getMyCourses();if(!a){console.log("response tidak ditemukan!");return}l(this,L).populateMyListModules(a.message,a.data)}}L=new WeakMap,T=new WeakMap;function La(e,a,n,t){if(e.value=n,n<=0){a.textContent="0%",t.textContent="Mulai belajar";return}a.textContent=`${e.value}%`,n>0&&(t.textContent="Lanjut belajar"),n===e.max&&(t.textContent="Course selesai")}function Ta(e,a){e.addEventListener("click",()=>{a.classList.toggle("-translate-x-[100%]")})}function Ca(e,a,n,t){e.addEventListener("click",()=>{a.classList.remove("lg:translate-x-0"),a.classList.add("lg:-translate-x-[100%]"),t.classList.remove("justify-end"),t.classList.add("justify-center"),setTimeout(()=>{n.classList.remove("translate-x-[-100%]","opacity-0","hidden"),n.classList.add("translate-x-0","opacity-100","lg:block")},300)})}function $a(e,a,n){e.addEventListener("click",()=>{e.classList.add("translate-x-[-100%]","opacity-0"),setTimeout(()=>{a.classList.add("lg:translate-x-0"),a.classList.remove("lg:-translate-x-[100%]"),n.classList.remove("justify-center"),n.classList.add("justify-end"),e.classList.add("hidden")},300)})}function Sa(e,a,n){e.value=n,a.textContent=`${n}%`}function Da({skipTransition:e=!1,updateDOM:a}){if(e||!document.startViewTransition){const n=Promise.resolve().then(a);return{ready:Promise.reject(Error("View transition unsupported")),updateCallbackDone:n,finished:n}}return document.startViewTransition(a)}var C;class Ba{constructor(){u(this,C)}async render(){return`
        <div class="px-5 mt-32">
          <div id="my-class-list__item" class="w-full"></div>
        </div>
    `}async afterRender(){o(this,C,new Ma({view:this,model:K})),l(this,C).initialMyListModule();const a=document.querySelector("header");a&&(a.style.display="block")}populateMyListModules(a,n){if(n.length<=0){this.populateMyClassEmpty();return}const t=n.reduce((i,s)=>i.concat(ma({...s})),"");document.getElementById("my-class-list__item").innerHTML=`
    <div class="grid gap-y-8 gap-x-5 my-10 md:mx-5 md:grid-cols-3 lg:grid-cols-4">${t}</div>
    `,n.map(i=>{La(document.querySelector(`#progress-${i.courseId}`),document.querySelector(`#percentage-${i.courseId}`),i.progress,document.querySelector(`[data-courseId="${i.courseId}"] .card-btn`))})}populateMyClassEmpty(){document.getElementById("my-class-list__item").innerHTML=ga()}}C=new WeakMap;var $,k,S;class Pa{constructor(a,{view:n,model:t}){u(this,$);u(this,k);u(this,S);o(this,$,a),o(this,k,n),o(this,S,t)}async initialDetailMyModule(){try{const a=await l(this,S).getDetailMyCourse(l(this,$));if(!a){l(this,k).showError("Data kursus tidak ditemukan.");return}l(this,k).populateMyDetailModule(a.message,a.data)}catch(a){l(this,k).showError("Terjadi kesalahan saat memuat data kursus: "+a.message)}}}$=new WeakMap,k=new WeakMap,S=new WeakMap;var D;class Aa{constructor(){u(this,D)}async render(){return`
    <div class="flex justify-center h-[80vh] items-center mt-24">
      <div id="detail-class" class=""></div>
    </div>
    `}async afterRender(){o(this,D,new Pa(_().id,{view:this,model:K})),await l(this,D).initialDetailMyModule();const a=document.querySelector("header");a&&(a.style.display="block");const n=document.querySelector("footer");n&&(n.style.display="block")}populateMyDetailModule(a,n){document.getElementById("detail-class").innerHTML=ca(n);const t=document.getElementById("btn-learn");return n.progress===0?t.textContent="Mulai belajar":n.progress>0&&n.progress<100?t.textContent="Lanjut belajar":t.textContent="Belajar lagi"}showError(a){document.getElementById("main-content").innerHTML=`
      <p class="error">${a}</p>
    `}}D=new WeakMap;var B,P,p;class Ea{constructor(a,{view:n,model:t}){u(this,B);u(this,P);u(this,p);o(this,B,a),o(this,P,n),o(this,p,t)}async initialDetailModule(){try{const a=await l(this,p).getDetailMyCourse(l(this,B));if(console.log("response : ",a),!a){console.log("response tidak ditemukan");return}l(this,P).populateDetailModule(a.message,a.data)}catch(a){console.error("initialDetailModule: ",a.message)}}async completedModule(a,n){try{l(this,p).updateModuleToComplete(a,n),console.log("updateModuleToComplete: ",l(this,p).updateModuleToComplete(a,n))}catch(t){console.error("completedModule: ",t)}}}B=new WeakMap,P=new WeakMap,p=new WeakMap;var f,v,A;class Ha{constructor(){u(this,f);u(this,v);u(this,A)}async render(){return`
    <div id="detail-module"></div>
    `}async afterRender(){const a=_();o(this,A,a.id),o(this,v,a.moduleId),o(this,f,new Ea(a.id,{view:this,model:K})),l(this,f).initialDetailModule();const n=document.querySelector("header");n&&(n.style.display="none");const t=document.querySelector("footer");t&&(t.style.display="none")}populateDetailModule(a,n){document.getElementById("detail-module").innerHTML=ka(n,l(this,v)),Ta(document.getElementById("drawer-sidebar"),document.getElementById("default-sidebar")),Ca(document.getElementById("close-sidebar"),document.getElementById("default-sidebar"),document.getElementById("open-sidebar"),document.getElementById("content")),$a(document.getElementById("open-sidebar"),document.getElementById("default-sidebar"),document.getElementById("content")),document.getElementById("module-completed").addEventListener("click",()=>{l(this,f).completedModule(l(this,A),l(this,v)),Sa(document.getElementById("progress-bar"),document.getElementById("percentage"),n.progress)})}}f=new WeakMap,v=new WeakMap,A=new WeakMap;const aa={"/":()=>new xa,"/list-class":()=>new Ia,"/my-class/my":()=>new Ba,"/my-class/:id/corridor":()=>new Aa,"/my-class/:id/module/:moduleId":()=>new Ha};var w,E,H,N,b,h,Q,na;class Na{constructor({content:a,headerList:n,navigationDrawer:t,headerPoint:i}){u(this,h);u(this,w);u(this,E);u(this,H);u(this,N);u(this,b);o(this,w,a),o(this,E,n),o(this,H,t),o(this,N,i),o(this,b,R())}async renderPage(){const a=Z(),n=_(),t=aa[a]||aa["/"];let i=a;a.startsWith("my-class")?i="my-class":a==="/"&&(i="dashboard");const s=t();if(s.setParams&&(s.setParams=n),!document.startViewTransition){l(this,w).innerHTML=await s.render(),await s.afterRender(),G(this,h,Q).call(this,i);return}const d=G(this,h,na).call(this);let m=null,x=null;if(d==="list-to-detail"&&t){const F=_();m=document.querySelector(`
        .card[data-courseId="${F.id}"] .vt-item-image
        `),m&&(m.style.viewTransitionName="detail-image")}d==="detail-to-list"&&t&&(x=document.querySelector(".vt-detail-image"),x&&(x.style.viewTransitionName="detail-image"));const q=Da({updateDOM:async()=>{if(l(this,w).innerHTML=await s.render(),await s.afterRender(),d==="detail-to-list"&&t){const F=ia(l(this,b));m=document.querySelector(`
        .card[data-courseId="${F.id}"] .vt-item-image
        `),m&&(m.style.viewTransitionName="detail-image")}}});q.ready.catch(console.error),q.updateCallbackDone.then(()=>{scrollTo({top:0,behavior:"instant"}),G(this,h,Q).call(this,i)}).catch(console.error),q.finished.then(()=>{m&&(m.style.viewTransitionName=""),x&&(x.style.viewTransitionName=""),o(this,b,R())})}}w=new WeakMap,E=new WeakMap,H=new WeakMap,N=new WeakMap,b=new WeakMap,h=new WeakSet,Q=function(a){const n=l(this,E),t=l(this,H).children.namedItem("drawer"),i=l(this,N);n.innerHTML=ua(a),t.innerHTML=da(a),i.innerHTML=oa()},na=function(){const a=ta(l(this,b)),n=Z(),t=["/my-class/my"],i=["/my-class/:id/corridor"];return t.includes(a)&&i.includes(n)?"list-to-detail":i.includes(a)&&t.includes(n)?"detail-to-list":null};document.addEventListener("DOMContentLoaded",async()=>{const e=new Na({content:document.getElementById("main-content"),headerList:document.getElementById("header-list"),navigationDrawer:document.getElementById("navigation-drawer"),headerPoint:document.getElementById("header-point")});await e.renderPage(),window.addEventListener("hashchange",async()=>{await e.renderPage()})});
