var oa=a=>{throw TypeError(a)};var Et=(a,e,t)=>e.has(a)||oa("Cannot "+t);var u=(a,e,t)=>(Et(a,e,"read from private field"),t?t.call(a):e.get(a)),p=(a,e,t)=>e.has(a)?oa("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(a):e.set(a,t),f=(a,e,t,n)=>(Et(a,e,"write to private field"),n?n.call(a,t):e.set(a,t),t),ne=(a,e,t)=>(Et(a,e,"access private method"),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();function yt(a){const e=a.split("/").filter(n=>n),t={};if(e.length>0?t.resource=e[0]:t.resource=null,e.length>1){const n=e[1],i=e[2];e[3],t.resource==="my-class"&&n==="my"?t.isMyPage=!0:n==="course"&&e.length>2?(t.courseSegment=n,t.moduleId=e[2]):e.length>2&&i==="corridor"?(t.id=n,t.corridor=i):i==="module"&&e.length>3?(t.id=n,t.module=i,t.moduleId=e[3]):t.id=n}return t}function ja(a){let e="";return a.resource&&(e=e.concat(`/${a.resource}`)),a.resource==="my-class"&&a.isMyPage?`${e}/my`:a.resource==="my-class"&&a.courseSegment==="course"&&a.moduleId?`${e}/course/moduleId`:a.id&&a.corridor?`${e}/:id/corridor`:a.id&&a.module&&a.moduleId?`${e}/:id/module/:moduleId`:(a.id&&(e=e.concat("/:id")),e||"/")}function ot(){return location.hash.replace("#","")||"/"}function Nt(){const a=ot(),e=yt(a);return ja(e)}function qt(){const a=ot();return yt(a)}function Hn(a){const e=yt(a);return ja(e)}function Fn(a){return yt(a)}var j,Se;class Vn{constructor({view:e,model:t}){p(this,j);p(this,Se);f(this,j,e),f(this,Se,t)}async initialDashboard(){try{const e=await u(this,Se).getAllModules();if(!e){console.log("populateDashboard: ",e),u(this,j).populateContinueLearningDashboardError();return}u(this,j).populateLearningDashboardList(e.data),u(this,j).levelLearningDashboard(e.gamification)}catch(e){console.error("initialDashboard: ",e),u(this,j).populateContinueLearningDashboardError();return}}}j=new WeakMap,Se=new WeakMap;const m={message:"Successfully retrieved all modules.",data:[{courseId:"course101",title:"Sistem Pengukuran",kelas:"10",image:"/images/image-materi/pengukuran.jpg",joinClass:!1,completed:!1,modules:[{moduleId:"module101",subTitle:"Besaran Fisika",description:"Besaran merupakan sesuatu yang akan diukur. Besaran terdiri atas besaran pokok dan besaran turunan. Besaran pokok merupakan besaran dasar yang satuannya sudah ditetapkan. Besaran turunan merupakan besaran yang satuannya tersusun dari beberapa satuan besaran pokok.",completed:!1,completedAt:null},{moduleId:"module102",subTitle:"Satuan Fisika",description:"Satuan merupakan ukuran yang menjadi acuan dari suatu besaran. Terdapat beberapa sistem satuan yang digunakan di dunia, yaitu sistem FPS (feet, pound,second), CGS (sentimeter, gram, sekon), dan MKS (meter, kilogram, sekon). Beberapa negara memiliki kebiasaannya masing-masing dalam penggunaan sistem satuan. Oleh karena itu, masyarakat ilmiah bersama-sama membuat kesepakatan tentang satu sistem satuan baku yang digunakan secara universal. Satuan tersebut adalah satuan internasional, dalam bahasa aslinya Systeme International D’ Unites, atau disingkat SI.",completed:!1,completedAt:null},{moduleId:"module103",subTitle:"Dimensi",description:"Dimensi merupakan cara suatu besaran turunan disusun berdasarkan besaran pokoknya. Suatu besaran turunan dapat dinyatakan dalam susunan beberapa besaran pokok yang dapat diketahui dengan melakukan analisis dimensi. Dimensi dari besaran pokok berupa lambang yang ditulis dengan kurung siku dan huruf kapital tertentu. Diantara dimensi-dimensi untuk besaran pokok yaitu: Panjang [L], Massa [M], Waktu [T], Suhu [0], Kuat arus listrik [I], Intensitas cahaya [J], Jumlah zat [N]. Adapun beberapa dimensi untuk besaran turunan diantaranya, Kecepatan [L]/[T] dan Momentum [M] [L]/[T].",completed:!1,completedAt:null},{moduleId:"module104",subTitle:"Angka Penting",description:" Angka dapat diperoleh dari mengukur dan membilang. Untuk mengetahui luas tanah perkebunan misalnya, maka harus dilakukan pengukuran. Sedangkan untuk mengetahui jumlah pohon yang tertanam di kebun maka diperoleh dengan cara membilang. Angka yang diperoleh dari hasil megukur disebut angka penting (berarti). Sedangkan angka hasil membilang disebut angka eksak (pasti). Angka penting terdiri dari angka pasti dan angka yang diragukan (angka taksiran). Angka taksiran pada angka penting (angka hasil pengukuran) terletak digit terakhir. Misalkan hasil pengukuran tebal buku menggunakan jangka sorong adalah 1,25 cm. Angka 1 dan 2 adalah angka pasti, sedangkan angka 5 adalah taksiran.",completed:!1,completedAt:null}],progress:0},{courseId:"course102",title:"Pemanasan Global",kelas:"10",joinClass:!1,completed:!1,image:"/images/image-materi/pemanasan.jpg",modules:[{moduleId:"module201",subTitle:"Efek Rumah Kaca",description:"Efek rumah kaca ialah proses pemanasan atmosfer bagian bawah oleh penyerapan radiasi gelombang pendek matahari dan pemantulan kembali. Disebut efek rumah kaca karena pemancaran kembali radiasi infra merah yang dihasilkan permukaan bumi oleh atmosfer menuju permukaan bumi kembali untuk menghangatkan bumi mirip terkurungnya radiasi infra merah yang dipancarkan kembali oleh tanah dan tanaman dalam rumah kaca.",completed:!1,completedAt:null},{moduleId:"module202",subTitle:"Pemanasan Global",description:"Atmosfer bumi terdiri dari berbagai macam dengan fungsi yang berbeda-beda. Kelompok gas yang secara alamiah menjaga agar permukaan bumi tetap hangat disebut dengan`gas rumah kaca`. Gas-gas termasuk gas rumah kaca diantaranya uap air, karbon dioksida, nitrogen oksida, freon, dan metana. Meningkatkanya gas rumah kaca di atmosfer berarti semakin banyak radiasi infra merah yang dipancarkan kembali oleh permukaan bumi terserap oleh gas-gas rumah kaca. Akibatnya suhu permukaan bumi semakin meningkat. Inilah yang disebut sebagai pemanasan global.",completed:!1,completedAt:null},{moduleId:"module203",subTitle:"Dampak Pemanasan Global",description:"Dampak pemanasan global secara umum adalah terjadinya peningkatan suhu ratarata di bumi. Namun, ada banyak sekali dampak yang terjadi akibat pemanasan global tersebut, baik itu iklim dan cuaca, peningkatan air laut, ekosistem, dan lainlain. Pemanasan Global mengakibatkan terjadinya perubahan iklim dan cuaca di berbagai penjuru dunia. Hal ini dikarenakan kondisi atmosfir yang berubah di berbagai lokasi akibat pemanasan global tersebut. Pemanasan global berdampak besar bagi semua mahluk hidup, termasuk hewan dan tumbuhan. Aktivitas manusia yang mengakibatkan pemanasan global akan membuat banyak hewan melakukan migrasi ke tempat lain.",completed:!1,completedAt:null},{moduleId:"module204",subTitle:"Perjanjian Internasional",description:"Perjanjian internasional yang pertama yaitu Protokol Montreal adalah sebuah traktat internasional yang dirancang untuk melindungi lapisan ozon dengan meniadakan produksi sejumlah zat yang diyakini bertanggung jawab atas berkurangnya lapisan ozon. Traktat ini terbuka untuk ditandatangani pada 16 September 1987 dan berlaku sejak 1 Januari 1989. Sejak itu, traktat ini telah mengalami lima kali revisi yaitu pada 1990 di London, 1992 di Kopenhagen, 1995 di Vienna, 1997 di Montreal dan 1999 di Beijing. Perjanjian internasional yang kedua yaitu Protokol Kyoto adalah sebuah amendemen terhadap Konvensi Rangka Kerja PBB tentang Perubahan Iklim (UNFCCC), sebuah persetujuan internasional tentang pemanasan global yang disepakati pada tahun 1997 di Jepang yang disepakatii 160 negara."}],progress:0},{courseId:"course103",title:"Dinamika Partikel",kelas:"11",joinClass:!1,completed:!1,image:"/images/image-materi/dinamika-partikel.jpg",modules:[{moduleId:"module301",subTitle:"Hukum 1 Newton",description:"Ilmuwan Yunani bernama Aristoteles membagi gerak menjadi 2 yaitu gerak alami dan gerak paksa. Dia menyatakan bahwa gerak alami ialah gerak yang tidak disebabkan oleh gaya. gerak alami di bumi contohnya gerak ke atas atau ke bawah. Sedangkan gerak paksa ialah gerak yang disebabkan oleh gaya. Contohnya adalah tarikan dan dorongan. Jika pada suatu benda yang bergerak tidak bekerja gaya luar, suatu saat benda itu akan kembali ke keadaan alaminya yaitu diam. Dari pernyataan Aristoteles tersebut memunculkan sebuah pertanyaan, benarkah bahwa suatu benda tidak mungkin mempertahankan geraknya? Galileo ialah orang yang pertama kali mengemukakan jawaban untuk pertanyaan diatas. Melalui percobaan menjatuhkan bola pada permukaan lengkung yang licin, Galileo menyatakan bahwa jika gesekan angin dan gesekan antarpermukaan dapat ditiadakan, kelajuan konstan benda pada lintasan lurus dapat terus dipertahankan tanpa memerlukan gaya dari luar. Jawaban Galileo ini memginspirasi Isaac Newton untuk menyatakan hukum pertamanya yang berbunyi: 'Jika resultan gaya pada suatu benda sama dengan nol, benda yang mula-mula diam akan tetap diam dan benda yang mula-mula bergerak akan terus bergerak dengan kecepatan konstan.' Berdasarkan hukum pertama ini, Newton menyimpulkan bahwa benda memiliki kecenderungan untuk mempertahankan geraknya (Inersia).",completed:!1,completedAt:null},{moduleId:"module302",subTitle:"Hukum 2 Newton",description:"Hukum I Newton berkaitan dengan gerak suatu benda ketika resultan gaya yang bekerja pada benda sama dengan nol (F = 0 Pada keadaan seperti ini, kecepatan benda adalah tetap atau benda mengalami gerak lurus beraturan. Kita katakan bahwa benda tidak mengalami percepatan atau percepatannya nol. Bagaimana jika pada benda bekerja sebuah gaya saja atau beberapa gaya yang resultannya tidak nol? Pada keadaan ini ternyata kecepatan benda selalu berubah. Kita katakan bahwa benda mengalami percepatan. Jelas bahwa ada kaitan antara resultan gan dengan percepatan yang ditimbulkannya. Kaitan antara percepatan dan tesultannya inilah yang diselidiki oleh Newton, sehingga a berhasil menceruskan hukum keduanya tentang gerak, yang dikenal sebagai hukum II Newton. Hukum II Newton berbunyi: Percepatan yang dihasilkan oleh resultan gaya yang bekerja pada benda berbanding lurus dengan resultan gayanya dan berbanding terbalik dengan massa benda.",completed:!1,completedAt:null},{moduleId:"module303",subTitle:"Hukum 3 Newton",description:"Newton menyatakan bahwa gaya tunggal yang hanya melibatkan satu benda tak mungkin ada. Gaya hanya hadir jika sedikitnya ada dua benda yang berinteraksi. Pada interaksi ini gaya-gaya selalu berpasangan. Jika A mengerjakan gaya pada B, maka B akan mengerjakan gaya pada A. Gaya pertama dapat Anda sebut sebagai aksi dan gaya kedua sebagai reaksi. Ini tidak berarti bahwa aksi bekerja lebih dahulu baru timbul reaksi. Kedua gaya ini terjadi bersamaan. Dengan demikian, tidak jadi masalah, gaya mana yang Anda anggap sebagai aksi dan gaya mana yang Anda anggap sebagai reaksi. 'Jika A mengerjakan gaya pada B, maka B akan mengerjakan gaya pada A, yang besarnya sama tetapi arahnya berlawanan'. Hukum ini kadang-kadang dinyatakan sebagai berikut.'Untuk setiap aksi, ada suatu reaksi yang sama besar, tetapi berlawanan arah.'",completed:!1,completedAt:null},{moduleId:"module304",subTitle:"Jenis-Jenis Gaya",description:"Dalam konsep fisika gaya ialah tarikan atau dorongan yang dialami oleh benda. Ada empat jenis gaya yang bekerja pada suatu benda yaitu (1) gaya berat, (2) gaya normal, (3) gaya gesek, dan (4) gaya tegangan tali. Gaya berat  atau 'berat' ialah gaya gravitasi bumi yang bekerja pada benda. Berat disini berbeda definisinya dengan massa. 'Massa' ialah ukuran kelembaman atau inersia yang dimiliki oleh benda. Namun keduanya saling berhubungan. Semakin besar massa yang dimiliki benda semakin berat pula benda tersebut. Gaya normal didefinisikan sebagai gaya yang bekerja pada bidang sentuh antara 2 permukaan yang bersentuhan, yang arahnya selalu tegak lurus terhadap bidang sentuh. Sedangkan gaya gesek, ia mirip dengan gaya normal yaitu sama-sama bekerja pada bidang sentuh antara 2 benda. Perbedaannya, arah gaya gesek searah dengan permukaan bidang sentuh dan berlawanan dengan kecenderungan arah gerak benda. Terakhir ialah gaya tegangan tali. Gaya ini bekerja pada ujung-ujung tali karena tali tersebut tegang."}],progress:0},{courseId:"course104",title:"Fluida Statis",kelas:"11",joinClass:!1,completed:!1,image:"/images/image-materi/fluida-statis.jpg",modules:[{moduleId:"module401",subTitle:"Tekanan",description:"Tekanan didefinisikan sebagai gaya normal yang bekerja pada suatu bidang dibagi  dengan luas permukaan bidang tersebut. Tekanan yang dialami benda ketika di udara dan di air itu berbeda. Tekanan yang dialami oleh benda yang berada di medium udara dinamakan tekanan udara atau tekanan atmosfer. Jika suatu benda berada dalam wadah yang berisi zat cair, tekanan yang dialami oleh benda tersebut dipengaruhi oleh massa jenis zat cair, kedalaman benda, dan gaya gravitasi. Tekanan yang dialami benda ketika berada dalam zat cair dinamakan tekanan hidrostatis.",completed:!1,completedAt:null},{moduleId:"module402",subTitle:"Hukum Pascal",description:"Ketika anda memeras ujung kantong plastik berisi air yang memiliki banyak lubang, air akan memancar  dari setiap lubang dengan sama kuat. Hasil percobaan ini diamati oleh 'Blaise Pascal' yang kemudian menyimpulkannya dalam hukum pascal yang berbunyi: 'Tekanan yang diberikan pada zat cair dalam ruang tertutup diteruskan sama besar ke segala arah'. Contoh penerapan dari hukum pascal ialah dongkrak hidrolik. Dongkrak hidrolik terdiri atas bejana dengan dua kaki yang masing-masing berisi penghisap. Penghisap 1 dan Penghisap 2 masing-masing memiliki ukuran diameter yang berbeda. Selain dongkrak hidrolik, beberapa penerapan dari hukum pascal ialah pompa hidrolik ban sepeda dan mesin hidrolik pengangkat mobil.",completed:!1,completedAt:null},{moduleId:"module403",subTitle:"Hukum Archimedes",description:"Ketika benda dicelupkan ke dalam zat cair, maka benda akan berada diantara 3 keadaan berikut: (1) mengapung, (2) melayang dan  (3) tenggelam. Keadaan yang dialami oleh benda tersebut dikarenakan adanya gaya apung atau gaya angkat ke atas oleh sebuah fluida. Munculnya gaya apung ialah konsekuensi dari tekanan zat cair yang meningkat seiring bertambahnya kedalaman. Fenomena ini pertama kali diamati oleh Archimedes. Archimedes mengamati bahwa pada bejana yang diisi penuh oleh air,kemudian dimasukkan benda ke dalam air tersebut, maka akan ada sejumlah volume air yang dipindahkan. Ternyata setelah diukur jumlah volume air yang dipindahkan itu sama dengan volume benda yang dicelupkan. Archimedes kemudian menemukan hukumnya yang terkenal yang berbunyi: 'Gaya angkat yang bekerja pada suatu benda yang dicelupkan sebagian atau seluruhnya ke dalam suatu fluida sama dengan berat benda yang dipindahakan ke fluida tersebut.'",completed:!1,completedAt:null},{moduleId:"module404",subTitle:"Tegangan Permukaan",description:"Tegangan permukaan zat cair adalah kecenderungan permukaan zat cair untuk menegang, sehingga permukaannya seperti ditutupi oleh suatu lapisan elastis. Mengapa hal ini  bisa terjadi ? Pertanyaan bagus! Seperti yang kita ketahui bahwa partikel-partikel yang sejenis terdapat gaya tarik-menarik yang disebut 'gaya kohesi'. Coba bayangkan kondisi ini. Terdapat 2 buah partikel yang sebut saja partikel A dan B. Partikel A berada di dalam air, sedangkan partikel B berada tepat di permukaan air. Partikel A karena berada di dalam air, ia akan ditarik oleh partikel yang ada disekitarnya dari segala arah. Sebagai hasilnya resultan gaya partikel A sama dengan nol. Pada partikel B ia juga mengalami situasi yang sama. Partikel B juga ditarik oleh partikel-partikel disekitarnya  yaitu dari bawah, kiri, dan kanan. Sedangkan dari atas tidak ada gaya tarik karena diatas partikel B ialah udara. Sebagai hasilnya resultan gaya pada partikel B ialah ke bawah. Resultan ini menyebabkan lapisan atas seakan-akan tertutup oleh hamparan selaput elastis yang ketat. Fenomena inilah yang disebut sebagai 'tegangan permukaan'.",completed:!1,completedAt:null}],progress:0},{courseId:"course105",title:"Listrik Statis",kelas:"12",joinClass:!1,completed:!1,image:"/images/image-materi/listrik.jpg",modules:[{moduleId:"module501",subTitle:"Muatan Listrik",description:"Apa itu muatan listrik? Apa yang dimaksud dengan Q Anda tentunya sudah sangat paham bahwa muatan listrik adalah muatan dasar suatu benda yang membuatnya mengalami gaya pada benda lain yang berdekatan dan memiliki muatan listrik. Muatan listrik diberi simbol Q, dan satuannya adalah Coulumb (C). Jika muatan listrik didekatkan dengan muatan listrik sejenis (positif-positif, dan negatif-negatif), interaksi yang terjadi yakni saling tolak-menolak. Sedangkan ketika suatu muatan listrik didekatkan dengan muatan listrik tak sejenis (positif-negatif), maka akan terjadi tarik-menarik. Lalu bagaimana sisir plastik yang digosokkan dapat menarik sobekan-sobekan kertas kecil? Setelah mengetahui sifat-sifat muatan listrik. Kita dapat lebih mudah memahami bagaimana sisir tersebut menarik sobekan-sobekan kertas. Perlu diketahui bahwa sebelum sisir digosokkan dengan rambut secara satu arah, sisir tidak bermuatan listrik, Sisir yang tidak bermuatan listrik tersebut belum bisa menarik sobekan-sobekan kertas.",completed:!1,completedAt:null},{moduleId:"module502",subTitle:"Gaya Coulomb",description:"Anda sudah mengetahui bahwa sebuah muatan (𝑞1) akan menimbulkan interaksi tarik-menarik atau tolak menolak pada muatan lainnya (𝑞2) yang berada cukup dekat dengan muatan 𝑞1. Interaksi tarik-menarik dan tolakmenolak tersebut disebut gaya listrik (𝐹). Lalu bagaimana hubungan antara gaya listrik dengan kedua muatan dan jarak antar kedua muatan tersebut? Melalui eksperimen gaya Coulomb, maka akan didapat hubungan antara besar gaya Coulomb dengan jarak antar muatan dan besar muatan. Hasil analisis data dari eksperimen tersebut menunjukkan bahwa besar gaya Coulomb sebanding dengan perkalian kedua muatan dan berbanding terbalik dengan kuadrat jarak antara kedua muatan tersebut.",completed:!1,completedAt:null},{moduleId:"module503",subTitle:"Medan Listrik",description:"Ketika Anda mendekatkan sisir atau penggaris plastik pada potongan kertas kecil, maka beberapa potongan kertas akan menempel pada sisir atau penggaris. Nah, bagaimana ketika sisir atau penggaris dijauhkan? Ternyata terdapat suatu wilayah di sekitar sisir atau penggaris plastik tersebut tersebut yang masih dapat terpengaruh oleh gaya listrik. Tempat di sekitar muatan listrik yang masih dipengaruhi gaya listrik itu merupakan medan listrik. Medan listrik adalah daerah di sekitar partikel bermuatan listrik yang masih dipengaruhi gaya Coulumb. Benda bermuatan yang menghasilkan medan listrik dinamakan muatan sumber. Muatan lain yang diletakkan dalam pengaruh medan listrik muatan sumber dinamakan muatan uji.",completed:!1,completedAt:null},{moduleId:"module504",subTitle:"Hukum Gauss",description:"Medan listrik divisualisasikan dengan menggunakan garis khayal medan listrik. Garis-garis medan listrik adalah garis bersambungan yang selalu mengarah menuju massa sumber medan listrik.  Semakin banyak garis-garis medan listrik, maka semakin kuat medan listriknya. Hukum Gauss yang menjelaskan tentang jumlah garis-garis gaya listrik (fluks listrik) yang menembus suatu permukaan tertutup, sama dengan jumlah muatan listrik yang dilingkupi oleh permukaan tertutup dibagi dengan pemitivitas udara ɛ0. Hukum Gauss dapat digunakan untuk menghitung kuat medan listrik dari suatu sistem muatan konduktor bersimetri tinggi, seperti konduktor dua keping sejajar dan konduktor bola berongga.",completed:!1,completedAt:null}],progress:0},{courseId:"course106",title:"Relativitas",kelas:"12",joinClass:!1,completed:!1,image:"/images/image-materi/relativitas.jpg",modules:[{moduleId:"module601",subTitle:"Relativitas Newton",description:"Teori Relativitas Newton menjelaskan gerak-gerak benda jauh di bawah kecepatan cahaya. Teori relativitas mempelajari bagaimana pengukuran besaran fisika yang bergantung pada pengamat seperti halnya dengan peristiwa yang diamati. Relativitas merupakan salah satu dari beberapa teori mengenai gerak, yang dirancang untuk menjelaskan penyimpangan dari mekanika Newton yang timbul akibat gerak relative yang sangat cepat. Teori ini telah mengubah pandangan kita mengenai ruang, waktu, massa, energi, gerak, dan gravitasi. Teori relativitas Newton terdiri atas teori khusus dan teori umum, yang keduanya bertumpu pada dasar matematika yang kuat dan keduanya telah diuji dengan percobaan-percobaan dan pengamatan. Newton mengatakan bahwa semua  gerak itu relatif. Benda akan dikatakan bergerak apabila kedudukan benda tersebut berubah terhadap kerangka acuannya. Kerangka acuan di mana Hukum Newton berlaku disebut kerangka acuan inersia. Jika kita memiliki dua kerangka acuan inersia yang bergerak dengan kecepatan konstan relatif terhadap yang lainnya, maka tidak dapat ditentukan bagian mana yang diam dan bagian mana yang bergerak atau keduanya bergerak. Galileo dan Newton mengemukakan tentang apa yang sekaran kita sebut sebagai prinsip relativitas Newton, yaitu hukum – hukum mekanika berlaku sama pada semua kerangka acuan inersial.",completed:!1,completedAt:null},{moduleId:"module602",subTitle:"Relativitas Khusus",description:"Teori relativitas Einstein merujuk pada kerangka acuan inersial yaitu kerangka acuan yang bergerak relatif pada kecepatan konstan (tetap) terhadap kerangka acuan lainnya. Dari hasil kajiannya, Einstein mengemukakan dua postulat, yaitu: 1. Hukum-hukum fisika memiliki bentuk yang sama pada semua kerangka acuan inersial. 2. Cahaya yang merambat di ruang hampa dengan kecepatan c = 3 x 108 m/s adalah sama untuk semua pengamat dan tidak bergantung pada gerak sumber cahaya maupun kecepatan pengamat. Postulat pertama didasarkan pada tidak adanya kerangka acuan umum yang diam mutlak, sehingga tidak dapat ditentukan mana yang dalam keadaan diam dan mana yang dalam keadaan bergerak. Misalnya, seseorang berinisial A berada di dalam pesawat dan seseorang berinisial B berada di permukaan bumi. Dari sudut pandang A, pesawat diam pada suatu tempat dan permukaan bumi-lah yang bergerak. Sedangkan dari sudut pandang B, permukaan bumi tempat dia berpijak yang tetap diam dan pesawat dengan berisi si A didalamnya yang bergerak. Postulat kedua menyatakan bahwa kecepatan cahaya c konstan, tidak bergantung pengamat yang mengukur dari kerangka acuan inersia. Segala pengukuran harus dibandingkan dengan kecepatan cahaya dan tidak ada kecepatan yang lebih besar dari kecepatan cahaya.",completed:!1,completedAt:null},{moduleId:"module603",subTitle:"Transformasi Lorentz",description:"Pada transformasi Galileo telah dikemukakan bahwa selang waktu pengamatan terhadap suatu peristiwa yang diamati oleh pengamat yang diam dengan pengamat yang relatif bergerak terhadap peristiwa adalah sama (t - t’). Hal inilah yang menurut Einstein tidak benar, selang waktu pengamatan antara pengamat yang diam dan pengamat yang bergerak relatif adalah tidak sama (t ≠ t’). Transformasi Lorentz pertama kali dikemukaan oleh Hendrik A. Lorentz, seorang fisikawan dari Belanda  pada tahun 1895. Persamaan-persamaan penjumlahan kecepatan transformasi Lorentz kemudian dikenal dengan penjumlahan kecepatan menurut teori relativitas Einstein. Persamaan tersebut di atas merupakan rumus kecepatan benda yang diamati oleh pengamat yang diam yang disebut rumus penambahan kecepatan relativistik yang sesuai dengan teori relativitas Einstein. ",completed:!1,completedAt:null},{moduleId:"module604",subTitle:"Dilatasi Waktu",description:"Menurut Einstein bahwa waktu adalah sesuatu yang relatif. Di dalam suatu kerangka acuan yang bergerak terhadap seorang pengamat yang diam terdapat lonceng yang menunjukkan selang waktu ∆to. Selang waktu yang diamati oleh pengamat tersebut adalah  ∆t lebih lambat dari pada ∆to. Beda waktu yang merupakan perpanjangan waktu pengamatan  bagi pengamat diamdisebut dilatasi waktu. Dalam teori relativitas Einstein, dilatasi waktu dalam dua keadaan ini dapat diringkas yaitu: Dalam relativitas khusus (atau, hipotetis jauh dari semua massa gravitasi), jam yang bergerak terhadap sistem inersia pengamatan diukur akan berjalan lebih lambat. Efek ini dijelaskan dengan tepat oleh transformasi Lorentz.   Dalam relativitas umum, jam pada posisi dengan potensial gravitasi yang lebih rendah seperti dalam jarak dekat ke planet yang ditemukan akan berjalan lebih lambat.",completed:!1,completedAt:null}],progress:0}],gamification:{point:0,badges:{smart:"Smart",intelligent:"Intelligent",expert:"Expert",genius:"Genius",wisdom:"Wisdom"},level:1,icon:{smart:"/images/icon-level/star-medal_1.png",intelligent:"/images/icon-level/star-medal_2.png",expert:"/images/icon-level/star-medal_3.png"}}},Ot="MODULES";function Jt(){return typeof Storage>"u"?(alert("Browser kamu tidak mendukung local storage"),!1):!0}function tt(a){if(!Jt||typeof a!="object"){console.log("local storage tidak tersedia atau data bukan objek: ",a);return}try{localStorage.setItem(Ot,JSON.stringify(a))}catch(e){console.error("gagal menyimpan data ke local storage: ",e)}}function Tt(){if(Jt)try{const a=localStorage.getItem(Ot);return a?JSON.parse(a):null}catch(a){return console.error("Gagal mengambil data dari local storage: ",a),localStorage.removeItem(Ot),null}}function Wn(){if(!Jt)return console.log("localStorage tidak tersedia atau belum digunakan"),{bytes:0,KB:0,MB:0};let a=0;for(let n in localStorage)localStorage.hasOwnProperty(n)&&(a+=(n.length+localStorage[n].length)*2);const e=a/1024,t=e/1024;return console.log(`Total ukuran localStorage: ${a} bytes`),console.log(`Total ukuran localStorage: ${e.toFixed(2)} KB`),console.log(`Total ukuran localStorage: ${t.toFixed(2)} MB`),{bytes:a,KB:e,MB:t}}const Ke={async getAllModules(){const a=Tt();return console.log("data dari localStorage: ",a),a?(m.data=a.data||m.data,m.gamification=a.gamification||m.gamification,console.log("gamification: ",m.gamification)):(console.log("Tidak ada data di localStorage, menyimpan data awal:",m),tt({...m})),m.gamification.point>=100&&m.gamification.point<150?m.gamification.level=2:m.gamification.point>=150&&m.gamification.point<250?m.gamification.level=3:m.gamification.level=1,tt({...m}),Wn(),{...m}},async setToMyCourse(a){const e=m.data.findIndex(t=>t.courseId===a);return e!==-1?(m.data[e].joinClass=!0,tt({...m}),{status:"success",message:"Menambahkan course berhasil",data:m.data[e]}):{status:"error",message:"course tidak ditemukan"}},async getMyCourses(){const a=Tt();let e=[];return a&&a.data?e=a.data.filter(t=>t.joinClass===!0):e=m.data.filter(t=>t.joinClass===!0),{status:"success",message:"Daftar kursus yang digabung",data:e}},async getDetailMyCourse(a){const e=Tt();e&&(m.data=e.data||m.data,m.gamification=e.gamification||m.gamification);const t=m.data.find(n=>n.courseId===a);return t?{status:"success",message:"course ditemukan",data:t}:{status:"failed",message:"course tidak ditemukan"}},async updateModuleToComplete(a,e){const t=m.data.findIndex(n=>n.courseId===a);if(t!==-1){const n=m.data[t].modules.findIndex(i=>i.moduleId===e);if(n!==-1){const i=new Date().toISOString();m.data[t].modules[n]={...m.data[t].modules[n],completed:!0,completedAt:i};const r=m.data[t].modules.length,s=m.data[t].modules.filter(o=>o.completed).length;return m.data[t].progress=r>0?Math.round(s/r*100):0,m.data[t].progress===100&&m.data[t].completed!==!0?(m.gamification.point+=50,m.data[t].completed=!0):m.data[t].progress===100&&m.data[t].completed===!0&&(m.gamification.point+=0),tt({...m}),{status:"success",message:`Modul ${e} ditandai selesai. Progress: ${m.data[t].progress}%`}}}return{status:"failed",message:"Modul atau kursus tidak ditemukan"}}};function zn(a,e){return a.modules.map(t=>`
    <li class="block p-2 rounded-md ${t.moduleId===e?"bg-neutral text-neutral-content":"text-neutral"}">
      <a href="#/my-class/${a.courseId}/module/${t.moduleId}" class="flex justify-between items-center">${t.subTitle} ${t.completed?"<i class='icon-[fluent--checkmark-circle-32-regular]'></i>":""}</a>
    </li>
    `).join("")}function Kn(a){return`
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
                <li><a href="#/" class="${a==="dashboard"?"text-neutral bg-neutral-content":""}">Dashboard</a></li>
                <li><a href="#/list-class" class="${a==="/list-class"?"text-neutral bg-neutral-content":""}">Daftar Kelas</a></li>
                <li><a href="#/my-class/my" class="${a==="/my-class/my"?"text-neutral  bg-neutral-content":""}">Kelas Saya</a></li>
            </ul>
        </div>
    `}function Gn(a){return`
        <ul class="menu menu-horizontal px-1 text-base flex gap-x-3">
            <li><a href="#/" class="${a==="dashboard"?"bg-neutral-content":""}">Dashboard</a></li>
            <li><a href="#/list-class" class="${a==="/list-class"?"bg-neutral-content":""}">Daftar Kelas</a></li>
            <li><a href="#/my-class/my" class="${a==="/my-class/my"?"bg-neutral-content":""}">Kelas Saya</a></li>
        </ul>
    `}function qn(){return`
    <div class="flex gap-x-3">
      <span class="flex items-center gap-x-2 font-semibold btn btn-neutral">
        <a href="#/login">Masuk</a>
      </span>
      <span class="flex items-center gap-x-2 font-semibold btn btn-outline btn-neutral">
        <a href="#/register">Daftar</a>
      </span>
    </div>
    `}function Jn(){return`
  <div>
    <div class="dropdown dropdown-end">
      <div tabindex="0" role="button" class="btn btn-ghost btn-circle avatar">
        <div class="w-10 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        </div>
      </div>
      <ul
        tabindex="0"
        class="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li>
          <a class="justify-between">
            Profile
            <span class="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a id="logout-btn" href="#/login">Logout</a></li>
      </ul>
    </div>
  </div>
  `}function St({courseId:a,image:e,title:t,kelas:n}){return`
        <div class="card bg-base-100 w-full shadow-sm lg:w-72" data-courseId="${a}">
            <figure>
                <img src="/E-Physics/${e}" alt="image-course"/>
            </figure>
            <div class="card-body flex flex-col gap-y-5">
                <h3 class="card-title text-xl font-bold">${t}</h3>
                <p class="text-base">Kelas ${n}</p>
                <div class="card-actions justify-start">
                    <button id="btn-kelas-${a}" class="btn btn-neutral btn-outline flex items-center">Gabung kelas <i class="icon-[fluent--people-community-48-filled]"></i></button>
                </div>
            </div>
        </div>
    `}function Yn({courseId:a,image:e,title:t,kelas:n}){return`
        <div class="card bg-base-100 w-full shadow-sm lg:w-72" data-courseId="${a}">
            <figure>
                <img src="/E-Physics/${e}" alt="image-course" class="vt-item-image"/>
            </figure>
            <div class="card-body flex flex-col gap-y-5">
                <h3 class="card-title text-xl font-bold">${t}</h3>
                <p class="text-base">Kelas ${n}</p>
                <div class="flex flex-col gap-y-2">
                    <progress id="progress-${a}" class="progress progress-neutral w-56" value="" max="100"></progress>
                    <span id="percentage-${a}"></span>
                </div>
                <div class="card-actions justify-start">
                    <a href="#/my-class/${a}/corridor" class="btn btn-neutral flex items-center card-btn"></a>
                </div>
            </div>
        </div>
    `}function Xn(){return`
    <div class="w-full text-center mt-30">
      <h3 class="text-2xl mb-5 font-bold">Course sedang kosong</h3>
      <p class="text-xl">Kamu masih tidak memiliki course untuk dipelajari</p>
    </div>
  `}function Qn(a){return`
    <div class="w-[80vw] flex flex-col gap-y-5 border border-base-300 rounded-b-2xl box-border">
      <figure class="w-full h-48 overflow-y-hidden bg-center">
        <img src="/E-Physics/${a.image}" alt="course image" class="vt-detail-image">
      </figure>
      <div class="flex justify-between mx-5 mt-5">
        <h3 class="text-2xl font-bold">${a.title}</h3>
        <a id="btn-learn" href="#/my-class/${a.courseId}/module/${a.modules[0].moduleId}" class="btn btn-neutral">Mulai belajar</a>
      </div>
      <div class="card card-border bg-base-100 mx-5 mb-10">
        <div class="card-body">
            <div class="flex justify-between w-full">
                <p class="text-lg">Progress belajar</p>
                <span id="percentage" class="text-lg">${a.progress}%</span>
            </div>
            <progress class="progress progress-neutral w-full" value="${a.progress}" max="100"></progress>
        </div>
      </div>
    </div>
    `}function Zn(a,e){const t=zn(a,e),n=a.modules.find(s=>s.moduleId===e),i=n?n.description:"Deskripsi tidak tersedia",r=a.progress||0;return`
    <div class="flex">
      <div>
        <div>
          <div class="fixed w-full h-20 border-b bg-base-100 border-base-300 z-50 flex justify-between items-center gap-x-5 px-5">
            <a href="#/my-class/${a.courseId}/corridor" class="text-neutral flex items-center lg:w-96 lg:gap-x-3">
              <i>
                <svg class="rotate-90" xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path fill="currentColor" d="m11.65 4.007l.1-.007a.75.75 0 0 1 .744.648l.007.102l-.001 12.696l3.22-3.221a.75.75 0 0 1 .976-.073l.084.072a.75.75 0 0 1 .073.977l-.072.084l-4.497 4.5a.75.75 0 0 1-.976.073l-.084-.073l-4.504-4.5a.75.75 0 0 1 .976-1.133l.084.072L11 17.442V4.75a.75.75 0 0 1 .65-.743l.1-.007z"/></svg>
              </i>
              <span class="hidden lg:inline-block lg:text-xl lg:font-bold">${a.title}</span>
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
                <progress id="progress-bar" class="progress progress-primary mb-1" value="${r}" max="100">
                </progress>
                <div class="flex justify-between">
                  <span class="hidden lg:inline-block text-primary text-sm">Progress</span>
                  <span id="percentage" class="hidden md:inline-block text-primary text-sm">${r}%</span>
                </div>
              </div>
            </div>
            <ul class="space-y-2 font-medium p-5">
              ${t}
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
  `}function ei(a){return`
    <div class="card bg-white w-96 shadow-sm">
      <figure class="px-10 pt-10 flex flex-col">
        <img src="/E-Physics/${a.icon.smart}" alt="Shoes" class="rounded-xl w-28" />
        <figcaption class="flex flex-col justify-center items-center font-bold">
          </p>Level ${a.level}</p>
          <p>${a.badges.smart}</p>
        </figcaption>
      </figure>
      <div class="card-body items-center text-center">
        <div class="flex flex-col items-start gap-y-2">
          <progress class="progress progress-info w-56" value="${a.point}" max="100"></progress>
          <p id="percentage"><span>${a.point}</span>/<span>100</span> poin</p>
        </div>
        <p>kumpulkan <span class="font-bold">${100-a.point} poin</span> lagi untuk naik ke level selanjutnya</p>
      </div>
    </div>
  `}function ti(a){return`
    <div class="card bg-warning w-96 shadow-sm">
      <figure class="px-10 pt-10 flex flex-col">
        <img src="/E-Physics/${a.icon.intelligent}" alt="Shoes" class="rounded-xl w-28" />
        <figcaption class="flex flex-col justify-center items-center font-bold">
        <p>Level ${a.level}</p>
        <p>${a.badges.intelligent}</p>
        </figcaption>
      </figure>
      <div class="card-body items-center text-center">
        <div class="flex flex-col items-start gap-y-2">
          <progress class="progress progress-neutral w-56" value="${a.point}" max="200"></progress>
          <p id="percentage"><span>${a.point}</span>/<span>200</span> poin</p>
        </div>
        <p>kumpulkan <span class="font-bold">${200-a.point} poin</span> lagi untuk naik ke level selanjutnya</p>
      </div>
    </div>
  `}function ai(a){return`
    <div class="card bg-info w-96 shadow-sm">
      <figure class="px-10 pt-10 flex flex-col">
        <img src="/E-Physics/${a.icon.expert}" alt="Shoes" class="rounded-xl w-28" />
        <figcaption class="flex flex-col justify-center items-center font-bold">
          <p>Level ${a.level}</p>
          <p>${a.badges.expert}</p>
        </figcaption>
      </figure>
      <div class="card-body items-center text-center">
        <div class="flex flex-col items-start gap-y-2">
          <progress class="progress progress-secondary w-56" value="${a.point}" max="350"></progress>
          <p id="percentage"><span>${a.point}</span>/<span>350</span> poin</p>
        </div>
        <p>kumpulkan <span class="font-bold">${350-a.point} poin</span> lagi untuk naik ke level selanjutnya</p>
      </div>
    </div>
  `}function ni({courseId:a,image:e,title:t,kelas:n,progress:i}){return`
    <div class="bg-white shadow-sm rounded-xl box-border p-5">
      <figure class="flex gap-x-3 items-center p-3">
        <img src="/E-Physics/${e}" class="w-24 rounded-2xl">
        <figcaption class="flex flex-col gap-y-2">
          <h3 class="text-lg font-semibold line-clamp-1">${t}</h3>
          <h4>${n}</h4>
        </figcaption>
      </figure>
      <div class="p-3">
        <div class="w-full bg-info rounded-full">
          <div class="bg-info-content text-xs font-medium text-blue-100 text-center p-0.5  leading-none rounded-full" style="width: ${i}%"> ${i}%</div>
        </div>
      </div>
      <div class="px-3 flex justify-end">
        <a href="#/my-class/${a}/corridor" class="text-info-content">Lanjut belajar</a>
      </div>
    </div>
  `}function ii(){return`
    <div class="h-40 bg-neutral-content shadow-sm rounded-xl text-center box-border p-3 flex flex-col justify-center text-neutral gap-y-2">
      <h3 class="text-lg font-semibold">Modul kosong</h3>
      <p>Saat ini kamu sedang tidak mempelajari apapun</p>
    </div>
  `}function ri({courseId:a,image:e,title:t,kelas:n,progress:i}){return`
    <div class="bg-white shadow-sm rounded-xl box-border p-5">
      <figure class="flex gap-x-3 items-center p-3">
        <img src="/E-Physics/${e}" class="w-24 rounded-2xl">
        <figcaption class="flex flex-col gap-y-2">
          <h3 class="text-lg font-semibold line-clamp-1">${t}</h3>
          <h4>${n}</h4>
        </figcaption>
      </figure>
      <div class="p-3">
        <div class="w-full bg-base-200 rounded-full">
          <div class="bg-success-content text-xs font-medium text-blue-100 text-center p-0.5  leading-none rounded-full" style="width: ${i}%"> ${i}%</div>
        </div>
      </div>
      <div class="px-3 flex justify-end">
        <a href="#/my-class/${a}/corridor" class="text-success-content">Belajar ulang</a>
      </div>
    </div>
  `}function si(){return`
    <div class="h-40 bg-neutral-content shadow-sm rounded-xl text-center box-border p-3 flex flex-col justify-center text-neutral gap-y-2">
      <h3 class="text-lg font-semibold">Modul kosong</h3>
      <p>Saat ini kamu belum menyelesaikan modul apapun</p>
    </div>
  `}var Ce;class oi{constructor(){p(this,Ce)}async render(){return`
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
    `}async afterRender(){f(this,Ce,new Vn({view:this,model:Ke})),u(this,Ce).initialDashboard();const e=document.querySelector("header");e&&(e.style.display="block")}populateLearningDashboardList(e){const t=e.filter(i=>i.progress>0&&i.progress<100).reduce((i,r)=>i.concat(ni({...r})),""),n=e.filter(i=>i.progress===100).reduce((i,r)=>(console.log("course module length: ",r.modules.length),i.concat(ri({...r}))),"");console.log("continue learning: ",t.length),document.getElementById("continue-learning").innerHTML=t.length>0?`<div class="grid gap-y-3 md:grid-cols-2 md:gap-x-10 md:mx-5 lg:grid-cols-3">${t}</div>`:`<div class="md:mx-5">${ii()}</div>`,document.getElementById("finished-learning").innerHTML=n.length>0?`<div class="grid gap-y-3 md:grid-cols-2 md:gap-x-10 md:mx-5 lg:grid-cols-3">${n}</div>`:`<div class="md:mx-5">${si()}</div>`}levelLearningDashboard(e){if(e.point>=0&&e.point<100)return document.getElementById("card-level").innerHTML=ei(e);if(e.point>=100&&e.point<200)return document.getElementById("card-level").innerHTML=ti(e);if(e.point>=200&&e.point<350)return document.getElementById("card-level").innerHTML=ai(e)}}Ce=new WeakMap;var Ae,de;class li{constructor({view:e,model:t}){p(this,Ae);p(this,de);f(this,Ae,e),f(this,de,t)}async initialListModule(){const e=await u(this,de).getAllModules();if(!e){console.log("response tidak ditemukan!");return}u(this,Ae).populateListModules(e.message,e.data)}async setMyCourse(e){await u(this,de).setToMyCourse(e),e||console.log("courseId tidak ditemukan")}}Ae=new WeakMap,de=new WeakMap;var z;class ci{constructor(){p(this,z)}async render(){return`
    <div id="list-class-container" class="">
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
    `}async afterRender(){f(this,z,new li({view:this,model:Ke})),this.contentHeight(),await u(this,z).initialListModule();const e=document.querySelector("header");e&&(e.style.display="block")}populateListModules(e,t){const n=t.reduce((s,o)=>s.concat(St({...o})),"");document.getElementById("class-list__item").innerHTML=n;const i=document.getElementById("select"),r=document.getElementById("class-list__item");i.addEventListener("change",()=>{const s=i.value;this.getCoursesByClass(s,t,r)}),t.map(s=>{document.querySelector(`#btn-kelas-${s.courseId}`).addEventListener("click",()=>{console.log("courseId: ",s),u(this,z).setMyCourse(s.courseId),u(this,z).initialListModule()})}),document.getElementById("search-course").addEventListener("submit",s=>{let o=document.getElementById("search-title").value.toLowerCase();console.log("searchInput: ",o),s.preventDefault(),this.searchCourse(o,t,r),s.target.reset()})}getCoursesByClass(e,t,n){let i=e?t.filter(r=>r.kelas===e):t;if(console.log("filterClass: ",i),i.length>0){const r=i.reduce((s,o)=>s.concat(St({...o})),"");n.innerHTML=r}}searchCourse(e,t,n){console.log("filterCourse: ",typeof t);let i=t.filter(r=>r.title.toLowerCase().includes(e));if(console.log("courseTitle: ",i),i.length>0){const r=i.reduce((s,o)=>s.concat(St({...o})),"");n.innerHTML=r}}contentHeight(){const e=document.querySelector("header"),t=document.querySelector("footer"),n=document.querySelector("#list-class-container");n.style.minHeight=`calc(100vh - ${e.clientHeight+t.clientHeight}px)`}}z=new WeakMap;var Pe,Re;class di{constructor({view:e,model:t}){p(this,Pe);p(this,Re);f(this,Pe,e),f(this,Re,t)}async initialMyListModule(){const e=await u(this,Re).getMyCourses();if(!e){console.log("response tidak ditemukan!");return}u(this,Pe).populateMyListModules(e.message,e.data)}}Pe=new WeakMap,Re=new WeakMap;function ui(a,e,t,n){if(a.value=t,t<=0){e.textContent="0%",n.textContent="Mulai belajar";return}e.textContent=`${a.value}%`,t>0&&(n.textContent="Lanjut belajar"),t===a.max&&(n.textContent="Course selesai")}function hi(a,e){a.addEventListener("click",()=>{e.classList.toggle("-translate-x-[100%]")})}function mi(a,e,t,n){a.addEventListener("click",()=>{e.classList.remove("lg:translate-x-0"),e.classList.add("lg:-translate-x-[100%]"),n.classList.remove("justify-end"),n.classList.add("justify-center"),setTimeout(()=>{t.classList.remove("translate-x-[-100%]","opacity-0","hidden"),t.classList.add("translate-x-0","opacity-100","lg:block")},300)})}function pi(a,e,t){a.addEventListener("click",()=>{a.classList.add("translate-x-[-100%]","opacity-0"),setTimeout(()=>{e.classList.add("lg:translate-x-0"),e.classList.remove("lg:-translate-x-[100%]"),t.classList.remove("justify-center"),t.classList.add("justify-end"),a.classList.add("hidden")},300)})}function gi(a,e,t){a.value=t,e.textContent=`${t}%`}function fi({skipTransition:a=!1,updateDOM:e}){if(a||!document.startViewTransition){const t=Promise.resolve().then(e);return{ready:Promise.reject(Error("View transition unsupported")),updateCallbackDone:t,finished:t}}return document.startViewTransition(e)}var Le;class yi{constructor(){p(this,Le)}async render(){return`
        <div class="px-5 mt-32">
          <div id="my-class-list__item" class="w-full"></div>
        </div>
    `}async afterRender(){f(this,Le,new di({view:this,model:Ke})),u(this,Le).initialMyListModule();const e=document.querySelector("header");e&&(e.style.display="block")}populateMyListModules(e,t){if(t.length<=0){this.populateMyClassEmpty();return}const n=t.reduce((i,r)=>i.concat(Yn({...r})),"");document.getElementById("my-class-list__item").innerHTML=`
    <div class="grid gap-y-8 gap-x-5 my-10 md:mx-5 md:grid-cols-3 lg:grid-cols-4">${n}</div>
    `,t.map(i=>{ui(document.querySelector(`#progress-${i.courseId}`),document.querySelector(`#percentage-${i.courseId}`),i.progress,document.querySelector(`[data-courseId="${i.courseId}"] .card-btn`))})}populateMyClassEmpty(){document.getElementById("my-class-list__item").innerHTML=Xn()}}Le=new WeakMap;var xe,K,De;class bi{constructor(e,{view:t,model:n}){p(this,xe);p(this,K);p(this,De);f(this,xe,e),f(this,K,t),f(this,De,n)}async initialDetailMyModule(){try{const e=await u(this,De).getDetailMyCourse(u(this,xe));if(!e){u(this,K).showError("Data kursus tidak ditemukan.");return}u(this,K).populateMyDetailModule(e.message,e.data)}catch(e){u(this,K).showError("Terjadi kesalahan saat memuat data kursus: "+e.message)}}}xe=new WeakMap,K=new WeakMap,De=new WeakMap;var Me;class ki{constructor(){p(this,Me)}async render(){return`
    <div class="flex justify-center h-[80vh] items-center mt-24">
      <div id="detail-class" class=""></div>
    </div>
    `}async afterRender(){f(this,Me,new bi(qt().id,{view:this,model:Ke})),await u(this,Me).initialDetailMyModule();const e=document.querySelector("header");e&&(e.style.display="block");const t=document.querySelector("footer");t&&(t.style.display="block")}populateMyDetailModule(e,t){document.getElementById("detail-class").innerHTML=Qn(t);const n=document.getElementById("btn-learn");return t.progress===0?n.textContent="Mulai belajar":t.progress>0&&t.progress<100?n.textContent="Lanjut belajar":n.textContent="Belajar lagi"}showError(e){document.getElementById("main-content").innerHTML=`
      <p class="error">${e}</p>
    `}}Me=new WeakMap;var Ne,Oe,G;class wi{constructor(e,{view:t,model:n}){p(this,Ne);p(this,Oe);p(this,G);f(this,Ne,e),f(this,Oe,t),f(this,G,n)}async initialDetailModule(){try{const e=await u(this,G).getDetailMyCourse(u(this,Ne));if(console.log("response : ",e),!e){console.log("response tidak ditemukan");return}u(this,Oe).populateDetailModule(e.message,e.data)}catch(e){console.error("initialDetailModule: ",e.message)}}async completedModule(e,t){try{u(this,G).updateModuleToComplete(e,t),console.log("updateModuleToComplete: ",u(this,G).updateModuleToComplete(e,t))}catch(n){console.error("completedModule: ",n)}}}Ne=new WeakMap,Oe=new WeakMap,G=new WeakMap;var ue,he,Ue;class vi{constructor(){p(this,ue);p(this,he);p(this,Ue)}async render(){return`
    <div id="detail-module"></div>
    `}async afterRender(){const e=qt();f(this,Ue,e.id),f(this,he,e.moduleId),f(this,ue,new wi(e.id,{view:this,model:Ke})),u(this,ue).initialDetailModule();const t=document.querySelector("header");t&&(t.style.display="none");const n=document.querySelector("footer");n&&(n.style.display="none")}populateDetailModule(e,t){document.getElementById("detail-module").innerHTML=Zn(t,u(this,he)),hi(document.getElementById("drawer-sidebar"),document.getElementById("default-sidebar")),mi(document.getElementById("close-sidebar"),document.getElementById("default-sidebar"),document.getElementById("open-sidebar"),document.getElementById("content")),pi(document.getElementById("open-sidebar"),document.getElementById("default-sidebar"),document.getElementById("content")),document.getElementById("module-completed").addEventListener("click",()=>{u(this,ue).completedModule(u(this,Ue),u(this,he)),gi(document.getElementById("progress-bar"),document.getElementById("percentage"),t.progress)})}}ue=new WeakMap,he=new WeakMap,Ue=new WeakMap;var q,Be,je;class Ii{constructor({view:e,model:t,authModel:n}){p(this,q);p(this,Be);p(this,je);f(this,q,e),f(this,Be,t),f(this,je,n)}async getLogin({email:e,password:t}){u(this,q).showLoadingButton();try{const n=await u(this,Be).login({email:e,password:t});if(!n||!n.user){console.error("getLogin: error: ",error);return}const i=await n.user.getIdToken();u(this,je).putAccessToken(i),u(this,q).loginSuccessfully(n)}catch(n){console.error("getLogin: error: ",n)}finally{u(this,q).hideLoadingButton()}}}q=new WeakMap,Be=new WeakMap,je=new WeakMap;/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _i=()=>{};var la={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $a=function(a){const e=[];let t=0;for(let n=0;n<a.length;n++){let i=a.charCodeAt(n);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&n+1<a.length&&(a.charCodeAt(n+1)&64512)===56320?(i=65536+((i&1023)<<10)+(a.charCodeAt(++n)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},Ei=function(a){const e=[];let t=0,n=0;for(;t<a.length;){const i=a[t++];if(i<128)e[n++]=String.fromCharCode(i);else if(i>191&&i<224){const r=a[t++];e[n++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=a[t++],s=a[t++],o=a[t++],l=((i&7)<<18|(r&63)<<12|(s&63)<<6|o&63)-65536;e[n++]=String.fromCharCode(55296+(l>>10)),e[n++]=String.fromCharCode(56320+(l&1023))}else{const r=a[t++],s=a[t++];e[n++]=String.fromCharCode((i&15)<<12|(r&63)<<6|s&63)}}return e.join("")},Ha={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(a,e){if(!Array.isArray(a))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let i=0;i<a.length;i+=3){const r=a[i],s=i+1<a.length,o=s?a[i+1]:0,l=i+2<a.length,c=l?a[i+2]:0,g=r>>2,y=(r&3)<<4|o>>4;let d=(o&15)<<2|c>>6,k=c&63;l||(k=64,s||(d=64)),n.push(t[g],t[y],t[d],t[k])}return n.join("")},encodeString(a,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(a):this.encodeByteArray($a(a),e)},decodeString(a,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(a):Ei(this.decodeStringToByteArray(a,e))},decodeStringToByteArray(a,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let i=0;i<a.length;){const r=t[a.charAt(i++)],o=i<a.length?t[a.charAt(i)]:0;++i;const c=i<a.length?t[a.charAt(i)]:64;++i;const y=i<a.length?t[a.charAt(i)]:64;if(++i,r==null||o==null||c==null||y==null)throw new Ti;const d=r<<2|o>>4;if(n.push(d),c!==64){const k=o<<4&240|c>>2;if(n.push(k),y!==64){const v=c<<6&192|y;n.push(v)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let a=0;a<this.ENCODED_VALS.length;a++)this.byteToCharMap_[a]=this.ENCODED_VALS.charAt(a),this.charToByteMap_[this.byteToCharMap_[a]]=a,this.byteToCharMapWebSafe_[a]=this.ENCODED_VALS_WEBSAFE.charAt(a),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[a]]=a,a>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(a)]=a,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(a)]=a)}}};class Ti extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Si=function(a){const e=$a(a);return Ha.encodeByteArray(e,!0)},Fa=function(a){return Si(a).replace(/\./g,"")},Va=function(a){try{return Ha.decodeString(a,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ci(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ai=()=>Ci().__FIREBASE_DEFAULTS__,Pi=()=>{if(typeof process>"u"||typeof la>"u")return;const a=la.__FIREBASE_DEFAULTS__;if(a)return JSON.parse(a)},Ri=()=>{if(typeof document>"u")return;let a;try{a=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=a&&Va(a[1]);return e&&JSON.parse(e)},Yt=()=>{try{return _i()||Ai()||Pi()||Ri()}catch(a){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${a}`);return}},Li=a=>{var e,t;return(t=(e=Yt())==null?void 0:e.emulatorHosts)==null?void 0:t[a]},Wa=()=>{var a;return(a=Yt())==null?void 0:a.config},za=a=>{var e;return(e=Yt())==null?void 0:e[`_${a}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xi{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,n))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bt(a){try{return(a.startsWith("http://")||a.startsWith("https://")?new URL(a).hostname:a).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Di(a){return(await fetch(a,{credentials:"include"})).ok}const ve={};function Mi(){const a={prod:[],emulator:[]};for(const e of Object.keys(ve))ve[e]?a.emulator.push(e):a.prod.push(e);return a}function Ni(a){let e=document.getElementById(a),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",a),t=!0),{created:t,element:e}}let ca=!1;function Oi(a,e){if(typeof window>"u"||typeof document>"u"||!bt(window.location.host)||ve[a]===e||ve[a]||ca)return;ve[a]=e;function t(d){return`__firebase__banner__${d}`}const n="__firebase__banner",r=Mi().prod.length>0;function s(){const d=document.getElementById(n);d&&d.remove()}function o(d){d.style.display="flex",d.style.background="#7faaf0",d.style.position="fixed",d.style.bottom="5px",d.style.left="5px",d.style.padding=".5em",d.style.borderRadius="5px",d.style.alignItems="center"}function l(d,k){d.setAttribute("width","24"),d.setAttribute("id",k),d.setAttribute("height","24"),d.setAttribute("viewBox","0 0 24 24"),d.setAttribute("fill","none"),d.style.marginLeft="-6px"}function c(){const d=document.createElement("span");return d.style.cursor="pointer",d.style.marginLeft="16px",d.style.fontSize="24px",d.innerHTML=" &times;",d.onclick=()=>{ca=!0,s()},d}function g(d,k){d.setAttribute("id",k),d.innerText="Learn more",d.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",d.setAttribute("target","__blank"),d.style.paddingLeft="5px",d.style.textDecoration="underline"}function y(){const d=Ni(n),k=t("text"),v=document.getElementById(k)||document.createElement("span"),be=t("learnmore"),et=document.getElementById(be)||document.createElement("a"),te=t("preprendIcon"),ae=document.getElementById(te)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(d.created){const _t=d.element;o(_t),g(et,be);const $n=c();l(ae,te),_t.append(ae,v,et,$n),document.body.appendChild(_t)}r?(v.innerText="Preview backend disconnected.",ae.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(ae.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,v.innerText="Preview backend running in this workspace."),v.setAttribute("id",k)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",y):y()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Ui(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(w())}function Bi(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function ji(){const a=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof a=="object"&&a.id!==void 0}function $i(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Hi(){const a=w();return a.indexOf("MSIE ")>=0||a.indexOf("Trident/")>=0}function Fi(){try{return typeof indexedDB=="object"}catch{return!1}}function Vi(){return new Promise((a,e)=>{try{let t=!0;const n="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(n);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(n),a(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var r;e(((r=i.error)==null?void 0:r.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wi="FirebaseError";class F extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name=Wi,Object.setPrototypeOf(this,F.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ge.prototype.create)}}class Ge{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},i=`${this.service}/${e}`,r=this.errors[e],s=r?zi(r,n):"Error",o=`${this.serviceName}: ${s} (${i}).`;return new F(i,o,n)}}function zi(a,e){return a.replace(Ki,(t,n)=>{const i=e[n];return i!=null?String(i):`<${n}?>`})}const Ki=/\{\$([^}]+)}/g;function Gi(a){for(const e in a)if(Object.prototype.hasOwnProperty.call(a,e))return!1;return!0}function pe(a,e){if(a===e)return!0;const t=Object.keys(a),n=Object.keys(e);for(const i of t){if(!n.includes(i))return!1;const r=a[i],s=e[i];if(da(r)&&da(s)){if(!pe(r,s))return!1}else if(r!==s)return!1}for(const i of n)if(!t.includes(i))return!1;return!0}function da(a){return a!==null&&typeof a=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qe(a){const e=[];for(const[t,n]of Object.entries(a))Array.isArray(n)?n.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(n));return e.length?"&"+e.join("&"):""}function ke(a){const e={};return a.replace(/^\?/,"").split("&").forEach(n=>{if(n){const[i,r]=n.split("=");e[decodeURIComponent(i)]=decodeURIComponent(r)}}),e}function we(a){const e=a.indexOf("?");if(!e)return"";const t=a.indexOf("#",e);return a.substring(e,t>0?t:void 0)}function qi(a,e){const t=new Ji(a,e);return t.subscribe.bind(t)}class Ji{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(n=>{this.error(n)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,n){let i;if(e===void 0&&t===void 0&&n===void 0)throw new Error("Missing Observer.");Yi(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:n},i.next===void 0&&(i.next=Ct),i.error===void 0&&(i.error=Ct),i.complete===void 0&&(i.complete=Ct);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(n){typeof console<"u"&&console.error&&console.error(n)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Yi(a,e){if(typeof a!="object"||a===null)return!1;for(const t of e)if(t in a&&typeof a[t]=="function")return!0;return!1}function Ct(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x(a){return a&&a._delegate?a._delegate:a}class ge{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xi{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const n=new xi;if(this.instancesDeferred.set(t,n),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&n.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),n=(e==null?void 0:e.optional)??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(i){if(n)return null;throw i}else{if(n)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Zi(e))try{this.getOrInitializeService({instanceIdentifier:W})}catch{}for(const[t,n]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const r=this.getOrInitializeService({instanceIdentifier:i});n.resolve(r)}catch{}}}}clearInstance(e=W){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=W){return this.instances.has(e)}getOptions(e=W){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[r,s]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(r);n===o&&s.resolve(i)}return i}onInit(e,t){const n=this.normalizeInstanceIdentifier(t),i=this.onInitCallbacks.get(n)??new Set;i.add(e),this.onInitCallbacks.set(n,i);const r=this.instances.get(n);return r&&e(r,n),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const i of n)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:Qi(e),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch{}return n||null}normalizeInstanceIdentifier(e=W){return this.component?this.component.multipleInstances?e:W:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Qi(a){return a===W?void 0:a}function Zi(a){return a.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class er{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Xi(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var b;(function(a){a[a.DEBUG=0]="DEBUG",a[a.VERBOSE=1]="VERBOSE",a[a.INFO=2]="INFO",a[a.WARN=3]="WARN",a[a.ERROR=4]="ERROR",a[a.SILENT=5]="SILENT"})(b||(b={}));const tr={debug:b.DEBUG,verbose:b.VERBOSE,info:b.INFO,warn:b.WARN,error:b.ERROR,silent:b.SILENT},ar=b.INFO,nr={[b.DEBUG]:"log",[b.VERBOSE]:"log",[b.INFO]:"info",[b.WARN]:"warn",[b.ERROR]:"error"},ir=(a,e,...t)=>{if(e<a.logLevel)return;const n=new Date().toISOString(),i=nr[e];if(i)console[i](`[${n}]  ${a.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ka{constructor(e){this.name=e,this._logLevel=ar,this._logHandler=ir,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in b))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?tr[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,b.DEBUG,...e),this._logHandler(this,b.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,b.VERBOSE,...e),this._logHandler(this,b.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,b.INFO,...e),this._logHandler(this,b.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,b.WARN,...e),this._logHandler(this,b.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,b.ERROR,...e),this._logHandler(this,b.ERROR,...e)}}const rr=(a,e)=>e.some(t=>a instanceof t);let ua,ha;function sr(){return ua||(ua=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function or(){return ha||(ha=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ga=new WeakMap,Ut=new WeakMap,qa=new WeakMap,At=new WeakMap,Xt=new WeakMap;function lr(a){const e=new Promise((t,n)=>{const i=()=>{a.removeEventListener("success",r),a.removeEventListener("error",s)},r=()=>{t($(a.result)),i()},s=()=>{n(a.error),i()};a.addEventListener("success",r),a.addEventListener("error",s)});return e.then(t=>{t instanceof IDBCursor&&Ga.set(t,a)}).catch(()=>{}),Xt.set(e,a),e}function cr(a){if(Ut.has(a))return;const e=new Promise((t,n)=>{const i=()=>{a.removeEventListener("complete",r),a.removeEventListener("error",s),a.removeEventListener("abort",s)},r=()=>{t(),i()},s=()=>{n(a.error||new DOMException("AbortError","AbortError")),i()};a.addEventListener("complete",r),a.addEventListener("error",s),a.addEventListener("abort",s)});Ut.set(a,e)}let Bt={get(a,e,t){if(a instanceof IDBTransaction){if(e==="done")return Ut.get(a);if(e==="objectStoreNames")return a.objectStoreNames||qa.get(a);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return $(a[e])},set(a,e,t){return a[e]=t,!0},has(a,e){return a instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in a}};function dr(a){Bt=a(Bt)}function ur(a){return a===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const n=a.call(Pt(this),e,...t);return qa.set(n,e.sort?e.sort():[e]),$(n)}:or().includes(a)?function(...e){return a.apply(Pt(this),e),$(Ga.get(this))}:function(...e){return $(a.apply(Pt(this),e))}}function hr(a){return typeof a=="function"?ur(a):(a instanceof IDBTransaction&&cr(a),rr(a,sr())?new Proxy(a,Bt):a)}function $(a){if(a instanceof IDBRequest)return lr(a);if(At.has(a))return At.get(a);const e=hr(a);return e!==a&&(At.set(a,e),Xt.set(e,a)),e}const Pt=a=>Xt.get(a);function mr(a,e,{blocked:t,upgrade:n,blocking:i,terminated:r}={}){const s=indexedDB.open(a,e),o=$(s);return n&&s.addEventListener("upgradeneeded",l=>{n($(s.result),l.oldVersion,l.newVersion,$(s.transaction),l)}),t&&s.addEventListener("blocked",l=>t(l.oldVersion,l.newVersion,l)),o.then(l=>{r&&l.addEventListener("close",()=>r()),i&&l.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),o}const pr=["get","getKey","getAll","getAllKeys","count"],gr=["put","add","delete","clear"],Rt=new Map;function ma(a,e){if(!(a instanceof IDBDatabase&&!(e in a)&&typeof e=="string"))return;if(Rt.get(e))return Rt.get(e);const t=e.replace(/FromIndex$/,""),n=e!==t,i=gr.includes(t);if(!(t in(n?IDBIndex:IDBObjectStore).prototype)||!(i||pr.includes(t)))return;const r=async function(s,...o){const l=this.transaction(s,i?"readwrite":"readonly");let c=l.store;return n&&(c=c.index(o.shift())),(await Promise.all([c[t](...o),i&&l.done]))[0]};return Rt.set(e,r),r}dr(a=>({...a,get:(e,t,n)=>ma(e,t)||a.get(e,t,n),has:(e,t)=>!!ma(e,t)||a.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fr{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(yr(t)){const n=t.getImmediate();return`${n.library}/${n.version}`}else return null}).filter(t=>t).join(" ")}}function yr(a){const e=a.getComponent();return(e==null?void 0:e.type)==="VERSION"}const jt="@firebase/app",pa="0.14.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R=new Ka("@firebase/app"),br="@firebase/app-compat",kr="@firebase/analytics-compat",wr="@firebase/analytics",vr="@firebase/app-check-compat",Ir="@firebase/app-check",_r="@firebase/auth",Er="@firebase/auth-compat",Tr="@firebase/database",Sr="@firebase/data-connect",Cr="@firebase/database-compat",Ar="@firebase/functions",Pr="@firebase/functions-compat",Rr="@firebase/installations",Lr="@firebase/installations-compat",xr="@firebase/messaging",Dr="@firebase/messaging-compat",Mr="@firebase/performance",Nr="@firebase/performance-compat",Or="@firebase/remote-config",Ur="@firebase/remote-config-compat",Br="@firebase/storage",jr="@firebase/storage-compat",$r="@firebase/firestore",Hr="@firebase/ai",Fr="@firebase/firestore-compat",Vr="firebase",Wr="12.0.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $t="[DEFAULT]",zr={[jt]:"fire-core",[br]:"fire-core-compat",[wr]:"fire-analytics",[kr]:"fire-analytics-compat",[Ir]:"fire-app-check",[vr]:"fire-app-check-compat",[_r]:"fire-auth",[Er]:"fire-auth-compat",[Tr]:"fire-rtdb",[Sr]:"fire-data-connect",[Cr]:"fire-rtdb-compat",[Ar]:"fire-fn",[Pr]:"fire-fn-compat",[Rr]:"fire-iid",[Lr]:"fire-iid-compat",[xr]:"fire-fcm",[Dr]:"fire-fcm-compat",[Mr]:"fire-perf",[Nr]:"fire-perf-compat",[Or]:"fire-rc",[Ur]:"fire-rc-compat",[Br]:"fire-gcs",[jr]:"fire-gcs-compat",[$r]:"fire-fst",[Fr]:"fire-fst-compat",[Hr]:"fire-vertex","fire-js":"fire-js",[Vr]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lt=new Map,Kr=new Map,Ht=new Map;function ga(a,e){try{a.container.addComponent(e)}catch(t){R.debug(`Component ${e.name} failed to register with FirebaseApp ${a.name}`,t)}}function _e(a){const e=a.name;if(Ht.has(e))return R.debug(`There were multiple attempts to register component ${e}.`),!1;Ht.set(e,a);for(const t of lt.values())ga(t,a);for(const t of Kr.values())ga(t,a);return!0}function Ja(a,e){const t=a.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),a.container.getProvider(e)}function I(a){return a==null?!1:a.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gr={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},H=new Ge("app","Firebase",Gr);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qr{constructor(e,t,n){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new ge("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw H.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Je=Wr;function Ya(a,e={}){let t=a;typeof e!="object"&&(e={name:e});const n={name:$t,automaticDataCollectionEnabled:!0,...e},i=n.name;if(typeof i!="string"||!i)throw H.create("bad-app-name",{appName:String(i)});if(t||(t=Wa()),!t)throw H.create("no-options");const r=lt.get(i);if(r){if(pe(t,r.options)&&pe(n,r.config))return r;throw H.create("duplicate-app",{appName:i})}const s=new er(i);for(const l of Ht.values())s.addComponent(l);const o=new qr(t,n,s);return lt.set(i,o),o}function Jr(a=$t){const e=lt.get(a);if(!e&&a===$t&&Wa())return Ya();if(!e)throw H.create("no-app",{appName:a});return e}function se(a,e,t){let n=zr[a]??a;t&&(n+=`-${t}`);const i=n.match(/\s|\//),r=e.match(/\s|\//);if(i||r){const s=[`Unable to register library "${n}" with version "${e}":`];i&&s.push(`library name "${n}" contains illegal characters (whitespace or "/")`),i&&r&&s.push("and"),r&&s.push(`version name "${e}" contains illegal characters (whitespace or "/")`),R.warn(s.join(" "));return}_e(new ge(`${n}-version`,()=>({library:n,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yr="firebase-heartbeat-database",Xr=1,Ee="firebase-heartbeat-store";let Lt=null;function Xa(){return Lt||(Lt=mr(Yr,Xr,{upgrade:(a,e)=>{switch(e){case 0:try{a.createObjectStore(Ee)}catch(t){console.warn(t)}}}}).catch(a=>{throw H.create("idb-open",{originalErrorMessage:a.message})})),Lt}async function Qr(a){try{const t=(await Xa()).transaction(Ee),n=await t.objectStore(Ee).get(Qa(a));return await t.done,n}catch(e){if(e instanceof F)R.warn(e.message);else{const t=H.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});R.warn(t.message)}}}async function fa(a,e){try{const n=(await Xa()).transaction(Ee,"readwrite");await n.objectStore(Ee).put(e,Qa(a)),await n.done}catch(t){if(t instanceof F)R.warn(t.message);else{const n=H.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});R.warn(n.message)}}}function Qa(a){return`${a.name}!${a.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zr=1024,es=30;class ts{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new ns(t),this._heartbeatsCachePromise=this._storage.read().then(n=>(this._heartbeatsCache=n,n))}async triggerHeartbeat(){var e,t;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=ya();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:i}),this._heartbeatsCache.heartbeats.length>es){const s=is(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(s,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(n){R.warn(n)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=ya(),{heartbeatsToSend:n,unsentEntries:i}=as(this._heartbeatsCache.heartbeats),r=Fa(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(t){return R.warn(t),""}}}function ya(){return new Date().toISOString().substring(0,10)}function as(a,e=Zr){const t=[];let n=a.slice();for(const i of a){const r=t.find(s=>s.agent===i.agent);if(r){if(r.dates.push(i.date),ba(t)>e){r.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),ba(t)>e){t.pop();break}n=n.slice(1)}return{heartbeatsToSend:t,unsentEntries:n}}class ns{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Fi()?Vi().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await Qr(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const n=await this.read();return fa(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const n=await this.read();return fa(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}else return}}function ba(a){return Fa(JSON.stringify({version:2,heartbeats:a})).length}function is(a){if(a.length===0)return-1;let e=0,t=a[0].date;for(let n=1;n<a.length;n++)a[n].date<t&&(t=a[n].date,e=n);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rs(a){_e(new ge("platform-logger",e=>new fr(e),"PRIVATE")),_e(new ge("heartbeat",e=>new ts(e),"PRIVATE")),se(jt,pa,a),se(jt,pa,"esm2020"),se("fire-js","")}rs("");function Za(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const ss=Za,en=new Ge("auth","Firebase",Za());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ct=new Ka("@firebase/auth");function os(a,...e){ct.logLevel<=b.WARN&&ct.warn(`Auth (${Je}): ${a}`,...e)}function nt(a,...e){ct.logLevel<=b.ERROR&&ct.error(`Auth (${Je}): ${a}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E(a,...e){throw Qt(a,...e)}function T(a,...e){return Qt(a,...e)}function tn(a,e,t){const n={...ss(),[e]:t};return new Ge("auth","Firebase",n).create(e,{appName:a.name})}function P(a){return tn(a,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Qt(a,...e){if(typeof a!="string"){const t=e[0],n=[...e.slice(1)];return n[0]&&(n[0].appName=a.name),a._errorFactory.create(t,...n)}return en.create(a,...e)}function h(a,e,...t){if(!a)throw Qt(e,...t)}function C(a){const e="INTERNAL ASSERTION FAILED: "+a;throw nt(e),new Error(e)}function L(a,e){a||C(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ft(){var a;return typeof self<"u"&&((a=self.location)==null?void 0:a.href)||""}function ls(){return ka()==="http:"||ka()==="https:"}function ka(){var a;return typeof self<"u"&&((a=self.location)==null?void 0:a.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cs(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(ls()||ji()||"connection"in navigator)?navigator.onLine:!0}function ds(){if(typeof navigator>"u")return null;const a=navigator;return a.languages&&a.languages[0]||a.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ye{constructor(e,t){this.shortDelay=e,this.longDelay=t,L(t>e,"Short delay should be less than long delay!"),this.isMobile=Ui()||$i()}get(){return cs()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zt(a,e){L(a.emulator,"Emulator should always be set here");const{url:t}=a.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class an{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;C("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;C("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;C("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const us={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hs=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],ms=new Ye(3e4,6e4);function V(a,e){return a.tenantId&&!e.tenantId?{...e,tenantId:a.tenantId}:e}async function D(a,e,t,n,i={}){return nn(a,i,async()=>{let r={},s={};n&&(e==="GET"?s=n:r={body:JSON.stringify(n)});const o=qe({key:a.config.apiKey,...s}).slice(1),l=await a._getAdditionalHeaders();l["Content-Type"]="application/json",a.languageCode&&(l["X-Firebase-Locale"]=a.languageCode);const c={method:e,headers:l,...r};return Bi()||(c.referrerPolicy="no-referrer"),a.emulatorConfig&&bt(a.emulatorConfig.host)&&(c.credentials="include"),an.fetch()(await rn(a,a.config.apiHost,t,o),c)})}async function nn(a,e,t){a._canInitEmulator=!1;const n={...us,...e};try{const i=new gs(a),r=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();const s=await r.json();if("needConfirmation"in s)throw at(a,"account-exists-with-different-credential",s);if(r.ok&&!("errorMessage"in s))return s;{const o=r.ok?s.errorMessage:s.error.message,[l,c]=o.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw at(a,"credential-already-in-use",s);if(l==="EMAIL_EXISTS")throw at(a,"email-already-in-use",s);if(l==="USER_DISABLED")throw at(a,"user-disabled",s);const g=n[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw tn(a,g,c);E(a,g)}}catch(i){if(i instanceof F)throw i;E(a,"network-request-failed",{message:String(i)})}}async function Xe(a,e,t,n,i={}){const r=await D(a,e,t,n,i);return"mfaPendingCredential"in r&&E(a,"multi-factor-auth-required",{_serverResponse:r}),r}async function rn(a,e,t,n){const i=`${e}${t}?${n}`,r=a,s=r.config.emulator?Zt(a.config,i):`${a.config.apiScheme}://${i}`;return hs.includes(t)&&(await r._persistenceManagerAvailable,r._getPersistenceType()==="COOKIE")?r._getPersistence()._getFinalTarget(s).toString():s}function ps(a){switch(a){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class gs{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,n)=>{this.timer=setTimeout(()=>n(T(this.auth,"network-request-failed")),ms.get())})}}function at(a,e,t){const n={appName:a.name};t.email&&(n.email=t.email),t.phoneNumber&&(n.phoneNumber=t.phoneNumber);const i=T(a,e,n);return i.customData._tokenResponse=t,i}function wa(a){return a!==void 0&&a.enterprise!==void 0}class fs{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return ps(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function ys(a,e){return D(a,"GET","/v2/recaptchaConfig",V(a,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bs(a,e){return D(a,"POST","/v1/accounts:delete",e)}async function dt(a,e){return D(a,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ie(a){if(a)try{const e=new Date(Number(a));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function ks(a,e=!1){const t=x(a),n=await t.getIdToken(e),i=ea(n);h(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const r=typeof i.firebase=="object"?i.firebase:void 0,s=r==null?void 0:r.sign_in_provider;return{claims:i,token:n,authTime:Ie(xt(i.auth_time)),issuedAtTime:Ie(xt(i.iat)),expirationTime:Ie(xt(i.exp)),signInProvider:s||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function xt(a){return Number(a)*1e3}function ea(a){const[e,t,n]=a.split(".");if(e===void 0||t===void 0||n===void 0)return nt("JWT malformed, contained fewer than 3 sections"),null;try{const i=Va(t);return i?JSON.parse(i):(nt("Failed to decode base64 JWT payload"),null)}catch(i){return nt("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function va(a){const e=ea(a);return h(e,"internal-error"),h(typeof e.exp<"u","internal-error"),h(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fe(a,e,t=!1){if(t)return e;try{return await e}catch(n){throw n instanceof F&&ws(n)&&a.auth.currentUser===a&&await a.auth.signOut(),n}}function ws({code:a}){return a==="auth/user-disabled"||a==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vs{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const n=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,n)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ie(this.lastLoginAt),this.creationTime=Ie(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ut(a){var y;const e=a.auth,t=await a.getIdToken(),n=await fe(a,dt(e,{idToken:t}));h(n==null?void 0:n.users.length,e,"internal-error");const i=n.users[0];a._notifyReloadListener(i);const r=(y=i.providerUserInfo)!=null&&y.length?sn(i.providerUserInfo):[],s=_s(a.providerData,r),o=a.isAnonymous,l=!(a.email&&i.passwordHash)&&!(s!=null&&s.length),c=o?l:!1,g={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Vt(i.createdAt,i.lastLoginAt),isAnonymous:c};Object.assign(a,g)}async function Is(a){const e=x(a);await ut(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function _s(a,e){return[...a.filter(n=>!e.some(i=>i.providerId===n.providerId)),...e]}function sn(a){return a.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Es(a,e){const t=await nn(a,{},async()=>{const n=qe({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:r}=a.config,s=await rn(a,i,"/v1/token",`key=${r}`),o=await a._getAdditionalHeaders();o["Content-Type"]="application/x-www-form-urlencoded";const l={method:"POST",headers:o,body:n};return a.emulatorConfig&&bt(a.emulatorConfig.host)&&(l.credentials="include"),an.fetch()(s,l)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function Ts(a,e){return D(a,"POST","/v2/accounts:revokeToken",V(a,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oe{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){h(e.idToken,"internal-error"),h(typeof e.idToken<"u","internal-error"),h(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):va(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){h(e.length!==0,"internal-error");const t=va(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(h(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:i,expiresIn:r}=await Es(e,t);this.updateTokensAndExpiration(n,i,Number(r))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+n*1e3}static fromJSON(e,t){const{refreshToken:n,accessToken:i,expirationTime:r}=t,s=new oe;return n&&(h(typeof n=="string","internal-error",{appName:e}),s.refreshToken=n),i&&(h(typeof i=="string","internal-error",{appName:e}),s.accessToken=i),r&&(h(typeof r=="number","internal-error",{appName:e}),s.expirationTime=r),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new oe,this.toJSON())}_performRefresh(){return C("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M(a,e){h(typeof a=="string"||typeof a>"u","internal-error",{appName:e})}class _{constructor({uid:e,auth:t,stsTokenManager:n,...i}){this.providerId="firebase",this.proactiveRefresh=new vs(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=n,this.accessToken=n.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Vt(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await fe(this,this.stsTokenManager.getToken(this.auth,e));return h(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return ks(this,e)}reload(){return Is(this)}_assign(e){this!==e&&(h(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new _({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){h(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await ut(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(I(this.auth.app))return Promise.reject(P(this.auth));const e=await this.getIdToken();return await fe(this,bs(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const n=t.displayName??void 0,i=t.email??void 0,r=t.phoneNumber??void 0,s=t.photoURL??void 0,o=t.tenantId??void 0,l=t._redirectEventId??void 0,c=t.createdAt??void 0,g=t.lastLoginAt??void 0,{uid:y,emailVerified:d,isAnonymous:k,providerData:v,stsTokenManager:be}=t;h(y&&be,e,"internal-error");const et=oe.fromJSON(this.name,be);h(typeof y=="string",e,"internal-error"),M(n,e.name),M(i,e.name),h(typeof d=="boolean",e,"internal-error"),h(typeof k=="boolean",e,"internal-error"),M(r,e.name),M(s,e.name),M(o,e.name),M(l,e.name),M(c,e.name),M(g,e.name);const te=new _({uid:y,auth:e,email:i,emailVerified:d,displayName:n,isAnonymous:k,photoURL:s,phoneNumber:r,tenantId:o,stsTokenManager:et,createdAt:c,lastLoginAt:g});return v&&Array.isArray(v)&&(te.providerData=v.map(ae=>({...ae}))),l&&(te._redirectEventId=l),te}static async _fromIdTokenResponse(e,t,n=!1){const i=new oe;i.updateFromServerResponse(t);const r=new _({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:n});return await ut(r),r}static async _fromGetAccountInfoResponse(e,t,n){const i=t.users[0];h(i.localId!==void 0,"internal-error");const r=i.providerUserInfo!==void 0?sn(i.providerUserInfo):[],s=!(i.email&&i.passwordHash)&&!(r!=null&&r.length),o=new oe;o.updateFromIdToken(n);const l=new _({uid:i.localId,auth:e,stsTokenManager:o,isAnonymous:s}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:r,metadata:new Vt(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(r!=null&&r.length)};return Object.assign(l,c),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ia=new Map;function A(a){L(a instanceof Function,"Expected a class definition");let e=Ia.get(a);return e?(L(e instanceof a,"Instance stored in cache mismatched with class"),e):(e=new a,Ia.set(a,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class on{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}on.type="NONE";const _a=on;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function it(a,e,t){return`firebase:${a}:${e}:${t}`}class le{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:i,name:r}=this.auth;this.fullUserKey=it(this.userKey,i.apiKey,r),this.fullPersistenceKey=it("persistence",i.apiKey,r),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await dt(this.auth,{idToken:e}).catch(()=>{});return t?_._fromGetAccountInfoResponse(this.auth,t,e):null}return _._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new le(A(_a),e,n);const i=(await Promise.all(t.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let r=i[0]||A(_a);const s=it(n,e.config.apiKey,e.name);let o=null;for(const c of t)try{const g=await c._get(s);if(g){let y;if(typeof g=="string"){const d=await dt(e,{idToken:g}).catch(()=>{});if(!d)break;y=await _._fromGetAccountInfoResponse(e,d,g)}else y=_._fromJSON(e,g);c!==r&&(o=y),r=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!r._shouldAllowMigration||!l.length?new le(r,e,n):(r=l[0],o&&await r._set(s,o.toJSON()),await Promise.all(t.map(async c=>{if(c!==r)try{await c._remove(s)}catch{}})),new le(r,e,n))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ea(a){const e=a.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(un(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(ln(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(mn(e))return"Blackberry";if(pn(e))return"Webos";if(cn(e))return"Safari";if((e.includes("chrome/")||dn(e))&&!e.includes("edge/"))return"Chrome";if(hn(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=a.match(t);if((n==null?void 0:n.length)===2)return n[1]}return"Other"}function ln(a=w()){return/firefox\//i.test(a)}function cn(a=w()){const e=a.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function dn(a=w()){return/crios\//i.test(a)}function un(a=w()){return/iemobile/i.test(a)}function hn(a=w()){return/android/i.test(a)}function mn(a=w()){return/blackberry/i.test(a)}function pn(a=w()){return/webos/i.test(a)}function ta(a=w()){return/iphone|ipad|ipod/i.test(a)||/macintosh/i.test(a)&&/mobile/i.test(a)}function Ss(a=w()){var e;return ta(a)&&!!((e=window.navigator)!=null&&e.standalone)}function Cs(){return Hi()&&document.documentMode===10}function gn(a=w()){return ta(a)||hn(a)||pn(a)||mn(a)||/windows phone/i.test(a)||un(a)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fn(a,e=[]){let t;switch(a){case"Browser":t=Ea(w());break;case"Worker":t=`${Ea(w())}-${a}`;break;default:t=a}const n=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Je}/${n}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class As{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=r=>new Promise((s,o)=>{try{const l=e(r);s(l)}catch(l){o(l)}});n.onAbort=t,this.queue.push(n);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(n){t.reverse();for(const i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:n==null?void 0:n.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ps(a,e={}){return D(a,"GET","/v2/passwordPolicy",V(a,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rs=6;class Ls{constructor(e){var n;const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??Rs,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((n=e.allowedNonAlphanumericCharacters)==null?void 0:n.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const n=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;n&&(t.meetsMinPasswordLength=e.length>=n),i&&(t.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let n;for(let i=0;i<e.length;i++)n=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(t,n>="a"&&n<="z",n>="A"&&n<="Z",n>="0"&&n<="9",this.allowedNonAlphanumericCharacters.includes(n))}updatePasswordCharacterOptionsStatuses(e,t,n,i,r){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=n)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xs{constructor(e,t,n,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=n,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ta(this),this.idTokenSubscription=new Ta(this),this.beforeStateQueue=new As(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=en,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(r=>this._resolvePersistenceManagerAvailable=r)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=A(t)),this._initializationPromise=this.queue(async()=>{var n,i,r;if(!this._deleted&&(this.persistenceManager=await le.create(this,e),(n=this._resolvePersistenceManagerAvailable)==null||n.call(this),!this._deleted)){if((i=this._popupRedirectResolver)!=null&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((r=this.currentUser)==null?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await dt(this,{idToken:e}),n=await _._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(n)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var r;if(I(this.app)){const s=this.app.settings.authIdToken;return s?new Promise(o=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(s).then(o,o))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let n=t,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const s=(r=this.redirectUser)==null?void 0:r._redirectEventId,o=n==null?void 0:n._redirectEventId,l=await this.tryRedirectSignIn(e);(!s||s===o)&&(l!=null&&l.user)&&(n=l.user,i=!0)}if(!n)return this.directlySetCurrentUser(null);if(!n._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(n)}catch(s){n=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(s))}return n?this.reloadAndSetCurrentUserOrClear(n):this.directlySetCurrentUser(null)}return h(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===n._redirectEventId?this.directlySetCurrentUser(n):this.reloadAndSetCurrentUserOrClear(n)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await ut(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=ds()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(I(this.app))return Promise.reject(P(this));const t=e?x(e):null;return t&&h(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&h(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return I(this.app)?Promise.reject(P(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return I(this.app)?Promise.reject(P(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(A(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Ps(this),t=new Ls(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Ge("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const n=this.onAuthStateChanged(()=>{n(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),n={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(n.tenantId=this.tenantId),await Ts(this,n)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return e===null?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&A(e)||this._popupRedirectResolver;h(t,this,"argument-error"),this.redirectPersistenceManager=await le.create(this,[A(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)==null?void 0:t._redirectEventId)===e?this._currentUser:((n=this.redirectUser)==null?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((t=this.currentUser)==null?void 0:t.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,i){if(this._deleted)return()=>{};const r=typeof t=="function"?t:t.next.bind(t);let s=!1;const o=this._isInitialized?Promise.resolve():this._initializationPromise;if(h(o,this,"internal-error"),o.then(()=>{s||r(this.currentUser)}),typeof t=="function"){const l=e.addObserver(t,n,i);return()=>{s=!0,l()}}else{const l=e.addObserver(t);return()=>{s=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return h(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=fn(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var i;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await((i=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:i.getHeartbeatsHeader());t&&(e["X-Firebase-Client"]=t);const n=await this._getAppCheckToken();return n&&(e["X-Firebase-AppCheck"]=n),e}async _getAppCheckToken(){var t;if(I(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:t.getToken());return e!=null&&e.error&&os(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function ee(a){return x(a)}class Ta{constructor(e){this.auth=e,this.observer=null,this.addObserver=qi(t=>this.observer=t)}get next(){return h(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let kt={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Ds(a){kt=a}function yn(a){return kt.loadJS(a)}function Ms(){return kt.recaptchaEnterpriseScript}function Ns(){return kt.gapiScript}function Os(a){return`__${a}${Math.floor(Math.random()*1e6)}`}class Us{constructor(){this.enterprise=new Bs}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class Bs{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const js="recaptcha-enterprise",bn="NO_RECAPTCHA";class $s{constructor(e){this.type=js,this.auth=ee(e)}async verify(e="verify",t=!1){async function n(r){if(!t){if(r.tenantId==null&&r._agentRecaptchaConfig!=null)return r._agentRecaptchaConfig.siteKey;if(r.tenantId!=null&&r._tenantRecaptchaConfigs[r.tenantId]!==void 0)return r._tenantRecaptchaConfigs[r.tenantId].siteKey}return new Promise(async(s,o)=>{ys(r,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)o(new Error("recaptcha Enterprise site key undefined"));else{const c=new fs(l);return r.tenantId==null?r._agentRecaptchaConfig=c:r._tenantRecaptchaConfigs[r.tenantId]=c,s(c.siteKey)}}).catch(l=>{o(l)})})}function i(r,s,o){const l=window.grecaptcha;wa(l)?l.enterprise.ready(()=>{l.enterprise.execute(r,{action:e}).then(c=>{s(c)}).catch(()=>{s(bn)})}):o(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new Us().execute("siteKey",{action:"verify"}):new Promise((r,s)=>{n(this.auth).then(o=>{if(!t&&wa(window.grecaptcha))i(o,r,s);else{if(typeof window>"u"){s(new Error("RecaptchaVerifier is only supported in browser"));return}let l=Ms();l.length!==0&&(l+=o),yn(l).then(()=>{i(o,r,s)}).catch(c=>{s(c)})}}).catch(o=>{s(o)})})}}async function Sa(a,e,t,n=!1,i=!1){const r=new $s(a);let s;if(i)s=bn;else try{s=await r.verify(t)}catch{s=await r.verify(t,!0)}const o={...e};if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in o){const l=o.phoneEnrollmentInfo.phoneNumber,c=o.phoneEnrollmentInfo.recaptchaToken;Object.assign(o,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:c,captchaResponse:s,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in o){const l=o.phoneSignInInfo.recaptchaToken;Object.assign(o,{phoneSignInInfo:{recaptchaToken:l,captchaResponse:s,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return o}return n?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Wt(a,e,t,n,i){var r;if((r=a._getRecaptchaConfig())!=null&&r.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await Sa(a,e,t,t==="getOobCode");return n(a,s)}else return n(a,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await Sa(a,e,t,t==="getOobCode");return n(a,o)}else return Promise.reject(s)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hs(a,e){const t=Ja(a,"auth");if(t.isInitialized()){const i=t.getImmediate(),r=t.getOptions();if(pe(r,e??{}))return i;E(i,"already-initialized")}return t.initialize({options:e})}function Fs(a,e){const t=(e==null?void 0:e.persistence)||[],n=(Array.isArray(t)?t:[t]).map(A);e!=null&&e.errorMap&&a._updateErrorMap(e.errorMap),a._initializeWithPersistence(n,e==null?void 0:e.popupRedirectResolver)}function Vs(a,e,t){const n=ee(a);h(/^https?:\/\//.test(e),n,"invalid-emulator-scheme");const i=!1,r=kn(e),{host:s,port:o}=Ws(e),l=o===null?"":`:${o}`,c={url:`${r}//${s}${l}/`},g=Object.freeze({host:s,port:o,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!n._canInitEmulator){h(n.config.emulator&&n.emulatorConfig,n,"emulator-config-failed"),h(pe(c,n.config.emulator)&&pe(g,n.emulatorConfig),n,"emulator-config-failed");return}n.config.emulator=c,n.emulatorConfig=g,n.settings.appVerificationDisabledForTesting=!0,bt(s)?(Di(`${r}//${s}${l}`),Oi("Auth",!0)):zs()}function kn(a){const e=a.indexOf(":");return e<0?"":a.substr(0,e+1)}function Ws(a){const e=kn(a),t=/(\/\/)?([^?#/]+)/.exec(a.substr(e.length));if(!t)return{host:"",port:null};const n=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(n);if(i){const r=i[1];return{host:r,port:Ca(n.substr(r.length+1))}}else{const[r,s]=n.split(":");return{host:r,port:Ca(s)}}}function Ca(a){if(!a)return null;const e=Number(a);return isNaN(e)?null:e}function zs(){function a(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",a):a())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aa{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return C("not implemented")}_getIdTokenResponse(e){return C("not implemented")}_linkToIdToken(e,t){return C("not implemented")}_getReauthenticationResolver(e){return C("not implemented")}}async function Ks(a,e){return D(a,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gs(a,e){return Xe(a,"POST","/v1/accounts:signInWithPassword",V(a,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qs(a,e){return Xe(a,"POST","/v1/accounts:signInWithEmailLink",V(a,e))}async function Js(a,e){return Xe(a,"POST","/v1/accounts:signInWithEmailLink",V(a,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Te extends aa{constructor(e,t,n,i=null){super("password",n),this._email=e,this._password=t,this._tenantId=i}static _fromEmailAndPassword(e,t){return new Te(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new Te(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Wt(e,t,"signInWithPassword",Gs);case"emailLink":return qs(e,{email:this._email,oobCode:this._password});default:E(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const n={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Wt(e,n,"signUpPassword",Ks);case"emailLink":return Js(e,{idToken:t,email:this._email,oobCode:this._password});default:E(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ce(a,e){return Xe(a,"POST","/v1/accounts:signInWithIdp",V(a,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ys="http://localhost";class X extends aa{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new X(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):E("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:n,signInMethod:i,...r}=t;if(!n||!i)return null;const s=new X(n,i);return s.idToken=r.idToken||void 0,s.accessToken=r.accessToken||void 0,s.secret=r.secret,s.nonce=r.nonce,s.pendingToken=r.pendingToken||null,s}_getIdTokenResponse(e){const t=this.buildRequest();return ce(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,ce(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,ce(e,t)}buildRequest(){const e={requestUri:Ys,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=qe(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xs(a){switch(a){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Qs(a){const e=ke(we(a)).link,t=e?ke(we(e)).deep_link_id:null,n=ke(we(a)).deep_link_id;return(n?ke(we(n)).link:null)||n||t||e||a}class na{constructor(e){const t=ke(we(e)),n=t.apiKey??null,i=t.oobCode??null,r=Xs(t.mode??null);h(n&&i&&r,"argument-error"),this.apiKey=n,this.operation=r,this.code=i,this.continueUrl=t.continueUrl??null,this.languageCode=t.lang??null,this.tenantId=t.tenantId??null}static parseLink(e){const t=Qs(e);try{return new na(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ye{constructor(){this.providerId=ye.PROVIDER_ID}static credential(e,t){return Te._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=na.parseLink(t);return h(n,"argument-error"),Te._fromEmailAndCode(e,n.code,n.tenantId)}}ye.PROVIDER_ID="password";ye.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ye.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wn{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qe extends wn{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N extends Qe{constructor(){super("facebook.com")}static credential(e){return X._fromParams({providerId:N.PROVIDER_ID,signInMethod:N.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return N.credentialFromTaggedObject(e)}static credentialFromError(e){return N.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return N.credential(e.oauthAccessToken)}catch{return null}}}N.FACEBOOK_SIGN_IN_METHOD="facebook.com";N.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O extends Qe{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return X._fromParams({providerId:O.PROVIDER_ID,signInMethod:O.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return O.credentialFromTaggedObject(e)}static credentialFromError(e){return O.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return O.credential(t,n)}catch{return null}}}O.GOOGLE_SIGN_IN_METHOD="google.com";O.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U extends Qe{constructor(){super("github.com")}static credential(e){return X._fromParams({providerId:U.PROVIDER_ID,signInMethod:U.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return U.credentialFromTaggedObject(e)}static credentialFromError(e){return U.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return U.credential(e.oauthAccessToken)}catch{return null}}}U.GITHUB_SIGN_IN_METHOD="github.com";U.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B extends Qe{constructor(){super("twitter.com")}static credential(e,t){return X._fromParams({providerId:B.PROVIDER_ID,signInMethod:B.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return B.credentialFromTaggedObject(e)}static credentialFromError(e){return B.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return B.credential(t,n)}catch{return null}}}B.TWITTER_SIGN_IN_METHOD="twitter.com";B.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zs(a,e){return Xe(a,"POST","/v1/accounts:signUp",V(a,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,i=!1){const r=await _._fromIdTokenResponse(e,n,i),s=Aa(n);return new Q({user:r,providerId:s,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const i=Aa(n);return new Q({user:e,providerId:i,_tokenResponse:n,operationType:t})}}function Aa(a){return a.providerId?a.providerId:"phoneNumber"in a?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht extends F{constructor(e,t,n,i){super(t.code,t.message),this.operationType=n,this.user=i,Object.setPrototypeOf(this,ht.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,i){return new ht(e,t,n,i)}}function vn(a,e,t,n){return(e==="reauthenticate"?t._getReauthenticationResolver(a):t._getIdTokenResponse(a)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?ht._fromErrorAndOperation(a,r,e,n):r})}async function eo(a,e,t=!1){const n=await fe(a,e._linkToIdToken(a.auth,await a.getIdToken()),t);return Q._forOperation(a,"link",n)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function to(a,e,t=!1){const{auth:n}=a;if(I(n.app))return Promise.reject(P(n));const i="reauthenticate";try{const r=await fe(a,vn(n,i,e,a),t);h(r.idToken,n,"internal-error");const s=ea(r.idToken);h(s,n,"internal-error");const{sub:o}=s;return h(a.uid===o,n,"user-mismatch"),Q._forOperation(a,i,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&E(n,"user-mismatch"),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function In(a,e,t=!1){if(I(a.app))return Promise.reject(P(a));const n="signIn",i=await vn(a,n,e),r=await Q._fromIdTokenResponse(a,n,i);return t||await a._updateCurrentUser(r.user),r}async function ao(a,e){return In(ee(a),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _n(a){const e=ee(a);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function no(a,e,t){if(I(a.app))return Promise.reject(P(a));const n=ee(a),s=await Wt(n,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Zs).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&_n(a),l}),o=await Q._fromIdTokenResponse(n,"signIn",s);return await n._updateCurrentUser(o.user),o}function io(a,e,t){return I(a.app)?Promise.reject(P(a)):ao(x(a),ye.credential(e,t)).catch(async n=>{throw n.code==="auth/password-does-not-meet-requirements"&&_n(a),n})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ro(a,e){return D(a,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function so(a,{displayName:e,photoURL:t}){if(e===void 0&&t===void 0)return;const n=x(a),r={idToken:await n.getIdToken(),displayName:e,photoUrl:t,returnSecureToken:!0},s=await fe(n,ro(n.auth,r));n.displayName=s.displayName||null,n.photoURL=s.photoUrl||null;const o=n.providerData.find(({providerId:l})=>l==="password");o&&(o.displayName=n.displayName,o.photoURL=n.photoURL),await n._updateTokensIfNecessary(s)}function oo(a,e,t,n){return x(a).onIdTokenChanged(e,t,n)}function lo(a,e,t){return x(a).beforeAuthStateChanged(e,t)}function co(a){return x(a).signOut()}const mt="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class En{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(mt,"1"),this.storage.removeItem(mt),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uo=1e3,ho=10;class Tn extends En{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=gn(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),i=this.localCache[t];n!==i&&e(t,i,n)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((s,o,l)=>{this.notifyListeners(s,l)});return}const n=e.key;t?this.detachListener():this.stopPolling();const i=()=>{const s=this.storage.getItem(n);!t&&this.localCache[n]===s||this.notifyListeners(n,s)},r=this.storage.getItem(n);Cs()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,ho):i()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const i of Array.from(n))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)})},uo)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Tn.type="LOCAL";const mo=Tn;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sn extends En{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Sn.type="SESSION";const Cn=Sn;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function po(a){return Promise.all(a.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;const n=new wt(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:i,data:r}=t.data,s=this.handlersMap[i];if(!(s!=null&&s.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:i});const o=Array.from(s).map(async c=>c(t.origin,r)),l=await po(o);t.ports[0].postMessage({status:"done",eventId:n,eventType:i,response:l})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}wt.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ia(a="",e=10){let t="";for(let n=0;n<e;n++)t+=Math.floor(Math.random()*10);return a+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class go{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,s;return new Promise((o,l)=>{const c=ia("",20);i.port1.start();const g=setTimeout(()=>{l(new Error("unsupported_event"))},n);s={messageChannel:i,onMessage(y){const d=y;if(d.data.eventId===c)switch(d.data.status){case"ack":clearTimeout(g),r=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),o(d.data.response);break;default:clearTimeout(g),clearTimeout(r),l(new Error("invalid_response"));break}}},this.handlers.add(s),i.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[i.port2])}).finally(()=>{s&&this.removeMessageHandler(s)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S(){return window}function fo(a){S().location.href=a}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function An(){return typeof S().WorkerGlobalScope<"u"&&typeof S().importScripts=="function"}async function yo(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function bo(){var a;return((a=navigator==null?void 0:navigator.serviceWorker)==null?void 0:a.controller)||null}function ko(){return An()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pn="firebaseLocalStorageDb",wo=1,pt="firebaseLocalStorage",Rn="fbase_key";class Ze{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function vt(a,e){return a.transaction([pt],e?"readwrite":"readonly").objectStore(pt)}function vo(){const a=indexedDB.deleteDatabase(Pn);return new Ze(a).toPromise()}function zt(){const a=indexedDB.open(Pn,wo);return new Promise((e,t)=>{a.addEventListener("error",()=>{t(a.error)}),a.addEventListener("upgradeneeded",()=>{const n=a.result;try{n.createObjectStore(pt,{keyPath:Rn})}catch(i){t(i)}}),a.addEventListener("success",async()=>{const n=a.result;n.objectStoreNames.contains(pt)?e(n):(n.close(),await vo(),e(await zt()))})})}async function Pa(a,e,t){const n=vt(a,!0).put({[Rn]:e,value:t});return new Ze(n).toPromise()}async function Io(a,e){const t=vt(a,!1).get(e),n=await new Ze(t).toPromise();return n===void 0?null:n.value}function Ra(a,e){const t=vt(a,!0).delete(e);return new Ze(t).toPromise()}const _o=800,Eo=3;class Ln{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await zt(),this.db)}async _withRetries(e){let t=0;for(;;)try{const n=await this._openDb();return await e(n)}catch(n){if(t++>Eo)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return An()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=wt._getInstance(ko()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await yo(),!this.activeServiceWorker)return;this.sender=new go(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(t=e[0])!=null&&t.fulfilled&&(n=e[0])!=null&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||bo()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await zt();return await Pa(e,mt,"1"),await Ra(e,mt),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(n=>Pa(n,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(n=>Io(n,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Ra(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const r=vt(i,!1).getAll();return new Ze(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],n=new Set;if(e.length!==0)for(const{fbase_key:i,value:r}of e)n.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!n.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const i of Array.from(n))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),_o)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Ln.type="LOCAL";const To=Ln;new Ye(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function So(a,e){return e?A(e):(h(a._popupRedirectResolver,a,"argument-error"),a._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ra extends aa{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ce(e,this._buildIdpRequest())}_linkToIdToken(e,t){return ce(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return ce(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Co(a){return In(a.auth,new ra(a),a.bypassAuthState)}function Ao(a){const{auth:e,user:t}=a;return h(t,e,"internal-error"),to(t,new ra(a),a.bypassAuthState)}async function Po(a){const{auth:e,user:t}=a;return h(t,e,"internal-error"),eo(t,new ra(a),a.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xn{constructor(e,t,n,i,r=!1){this.auth=e,this.resolver=n,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:i,tenantId:r,error:s,type:o}=e;if(s){this.reject(s);return}const l={auth:this.auth,requestUri:t,sessionId:n,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Co;case"linkViaPopup":case"linkViaRedirect":return Po;case"reauthViaPopup":case"reauthViaRedirect":return Ao;default:E(this.auth,"internal-error")}}resolve(e){L(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){L(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ro=new Ye(2e3,1e4);class re extends xn{constructor(e,t,n,i,r){super(e,t,i,r),this.provider=n,this.authWindow=null,this.pollId=null,re.currentPopupAction&&re.currentPopupAction.cancel(),re.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return h(e,this.auth,"internal-error"),e}async onExecution(){L(this.filter.length===1,"Popup operations only handle one event");const e=ia();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(T(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(T(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,re.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;if((n=(t=this.authWindow)==null?void 0:t.window)!=null&&n.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(T(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Ro.get())};e()}}re.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lo="pendingRedirect",rt=new Map;class xo extends xn{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=rt.get(this.auth._key());if(!e){try{const n=await Do(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(n)}catch(t){e=()=>Promise.reject(t)}rt.set(this.auth._key(),e)}return this.bypassAuthState||rt.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Do(a,e){const t=Oo(e),n=No(a);if(!await n._isAvailable())return!1;const i=await n._get(t)==="true";return await n._remove(t),i}function Mo(a,e){rt.set(a._key(),e)}function No(a){return A(a._redirectPersistence)}function Oo(a){return it(Lo,a.config.apiKey,a.name)}async function Uo(a,e,t=!1){if(I(a.app))return Promise.reject(P(a));const n=ee(a),i=So(n,e),s=await new xo(n,i,t).execute();return s&&!t&&(delete s.user._redirectEventId,await n._persistUserIfCurrent(s.user),await n._setRedirectUser(null,e)),s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bo=600*1e3;class jo{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!$o(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!Dn(e)){const i=((n=e.error.code)==null?void 0:n.split("auth/")[1])||"internal-error";t.onError(T(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Bo&&this.cachedEventUids.clear(),this.cachedEventUids.has(La(e))}saveEventToCache(e){this.cachedEventUids.add(La(e)),this.lastProcessedEventTime=Date.now()}}function La(a){return[a.type,a.eventId,a.sessionId,a.tenantId].filter(e=>e).join("-")}function Dn({type:a,error:e}){return a==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function $o(a){switch(a.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Dn(a);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ho(a,e={}){return D(a,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fo=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Vo=/^https?/;async function Wo(a){if(a.config.emulator)return;const{authorizedDomains:e}=await Ho(a);for(const t of e)try{if(zo(t))return}catch{}E(a,"unauthorized-domain")}function zo(a){const e=Ft(),{protocol:t,hostname:n}=new URL(e);if(a.startsWith("chrome-extension://")){const s=new URL(a);return s.hostname===""&&n===""?t==="chrome-extension:"&&a.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&s.hostname===n}if(!Vo.test(t))return!1;if(Fo.test(a))return n===a;const i=a.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(n)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ko=new Ye(3e4,6e4);function xa(){const a=S().___jsl;if(a!=null&&a.H){for(const e of Object.keys(a.H))if(a.H[e].r=a.H[e].r||[],a.H[e].L=a.H[e].L||[],a.H[e].r=[...a.H[e].L],a.CP)for(let t=0;t<a.CP.length;t++)a.CP[t]=null}}function Go(a){return new Promise((e,t)=>{var i,r,s;function n(){xa(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{xa(),t(T(a,"network-request-failed"))},timeout:Ko.get()})}if((r=(i=S().gapi)==null?void 0:i.iframes)!=null&&r.Iframe)e(gapi.iframes.getContext());else if((s=S().gapi)!=null&&s.load)n();else{const o=Os("iframefcb");return S()[o]=()=>{gapi.load?n():t(T(a,"network-request-failed"))},yn(`${Ns()}?onload=${o}`).catch(l=>t(l))}}).catch(e=>{throw st=null,e})}let st=null;function qo(a){return st=st||Go(a),st}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jo=new Ye(5e3,15e3),Yo="__/auth/iframe",Xo="emulator/auth/iframe",Qo={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Zo=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function el(a){const e=a.config;h(e.authDomain,a,"auth-domain-config-required");const t=e.emulator?Zt(e,Xo):`https://${a.config.authDomain}/${Yo}`,n={apiKey:e.apiKey,appName:a.name,v:Je},i=Zo.get(a.config.apiHost);i&&(n.eid=i);const r=a._getFrameworks();return r.length&&(n.fw=r.join(",")),`${t}?${qe(n).slice(1)}`}async function tl(a){const e=await qo(a),t=S().gapi;return h(t,a,"internal-error"),e.open({where:document.body,url:el(a),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Qo,dontclear:!0},n=>new Promise(async(i,r)=>{await n.restyle({setHideOnLeave:!1});const s=T(a,"network-request-failed"),o=S().setTimeout(()=>{r(s)},Jo.get());function l(){S().clearTimeout(o),i(n)}n.ping(l).then(l,()=>{r(s)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const al={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},nl=500,il=600,rl="_blank",sl="http://localhost";class Da{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function ol(a,e,t,n=nl,i=il){const r=Math.max((window.screen.availHeight-i)/2,0).toString(),s=Math.max((window.screen.availWidth-n)/2,0).toString();let o="";const l={...al,width:n.toString(),height:i.toString(),top:r,left:s},c=w().toLowerCase();t&&(o=dn(c)?rl:t),ln(c)&&(e=e||sl,l.scrollbars="yes");const g=Object.entries(l).reduce((d,[k,v])=>`${d}${k}=${v},`,"");if(Ss(c)&&o!=="_self")return ll(e||"",o),new Da(null);const y=window.open(e||"",o,g);h(y,a,"popup-blocked");try{y.focus()}catch{}return new Da(y)}function ll(a,e){const t=document.createElement("a");t.href=a,t.target=e;const n=document.createEvent("MouseEvent");n.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(n)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cl="__/auth/handler",dl="emulator/auth/handler",ul=encodeURIComponent("fac");async function Ma(a,e,t,n,i,r){h(a.config.authDomain,a,"auth-domain-config-required"),h(a.config.apiKey,a,"invalid-api-key");const s={apiKey:a.config.apiKey,appName:a.name,authType:t,redirectUrl:n,v:Je,eventId:i};if(e instanceof wn){e.setDefaultLanguage(a.languageCode),s.providerId=e.providerId||"",Gi(e.getCustomParameters())||(s.customParameters=JSON.stringify(e.getCustomParameters()));for(const[g,y]of Object.entries({}))s[g]=y}if(e instanceof Qe){const g=e.getScopes().filter(y=>y!=="");g.length>0&&(s.scopes=g.join(","))}a.tenantId&&(s.tid=a.tenantId);const o=s;for(const g of Object.keys(o))o[g]===void 0&&delete o[g];const l=await a._getAppCheckToken(),c=l?`#${ul}=${encodeURIComponent(l)}`:"";return`${hl(a)}?${qe(o).slice(1)}${c}`}function hl({config:a}){return a.emulator?Zt(a,dl):`https://${a.authDomain}/${cl}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dt="webStorageSupport";class ml{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Cn,this._completeRedirectFn=Uo,this._overrideRedirectResult=Mo}async _openPopup(e,t,n,i){var s;L((s=this.eventManagers[e._key()])==null?void 0:s.manager,"_initialize() not called before _openPopup()");const r=await Ma(e,t,n,Ft(),i);return ol(e,r,ia())}async _openRedirect(e,t,n,i){await this._originValidation(e);const r=await Ma(e,t,n,Ft(),i);return fo(r),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:i,promise:r}=this.eventManagers[t];return i?Promise.resolve(i):(L(r,"If manager is not set, promise should be"),r)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch(()=>{delete this.eventManagers[t]}),n}async initAndGetManager(e){const t=await tl(e),n=new jo(e);return t.register("authEvent",i=>(h(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:n.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Dt,{type:Dt},i=>{var s;const r=(s=i==null?void 0:i[0])==null?void 0:s[Dt];r!==void 0&&t(!!r),E(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Wo(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return gn()||cn()||ta()}}const pl=ml;var Na="@firebase/auth",Oa="1.11.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gl{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(n=>{e((n==null?void 0:n.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){h(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fl(a){switch(a){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function yl(a){_e(new ge("auth",(e,{options:t})=>{const n=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:s,authDomain:o}=n.options;h(s&&!s.includes(":"),"invalid-api-key",{appName:n.name});const l={apiKey:s,authDomain:o,clientPlatform:a,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:fn(a)},c=new xs(n,i,r,l);return Fs(c,t),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,n)=>{e.getProvider("auth-internal").initialize()})),_e(new ge("auth-internal",e=>{const t=ee(e.getProvider("auth").getImmediate());return(n=>new gl(n))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),se(Na,Oa,fl(a)),se(Na,Oa,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bl=300,kl=za("authIdTokenMaxAge")||bl;let Ua=null;const wl=a=>async e=>{const t=e&&await e.getIdTokenResult(),n=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(n&&n>kl)return;const i=t==null?void 0:t.token;Ua!==i&&(Ua=i,await fetch(a,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function vl(a=Jr()){const e=Ja(a,"auth");if(e.isInitialized())return e.getImmediate();const t=Hs(a,{popupRedirectResolver:pl,persistence:[To,mo,Cn]}),n=za("authTokenSyncURL");if(n&&typeof isSecureContext=="boolean"&&isSecureContext){const r=new URL(n,location.origin);if(location.origin===r.origin){const s=wl(r.toString());lo(t,s,()=>s(t.currentUser)),oo(t,o=>s(o))}}const i=Li("auth");return i&&Vs(t,`http://${i}`),t}function Il(){var a;return((a=document.getElementsByTagName("head"))==null?void 0:a[0])??document}Ds({loadJS(a){return new Promise((e,t)=>{const n=document.createElement("script");n.setAttribute("src",a),n.onload=e,n.onerror=i=>{const r=T("internal-error");r.customData=i,t(r)},n.type="text/javascript",n.charset="UTF-8",Il().appendChild(n)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});yl("Browser");var _l="firebase",El="12.0.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */se(_l,El,"app");const Tl={apiKey:"AIzaSyAU0DRyMGt208tVkKtcupIVPN92g87siEo",authDomain:"e-physics-7cd0f.firebaseapp.com",projectId:"e-physics-7cd0f",storageBucket:"e-physics-7cd0f.firebasestorage.app",messagingSenderId:"634734160038",appId:"1:634734160038:web:d0a3d04f06d4e85f1f6c67"},Sl=Ya(Tl),Mt=vl(Sl),Mn={async register({email:a,password:e}){return await no(Mt,a,e)},async login({email:a,password:e}){return await io(Mt,a,e)},async logout(){return await co(Mt)},async updateProfile(a,{displayName:e=null}={}){return await so(a,{displayName:e})}},sa="accesstoken";function It(){try{const a=localStorage.getItem(sa);return a===null||a==="undefined"?null:a}catch(a){return console.error("getAccessToken: error: ",a),null}}function Cl(a){try{return localStorage.setItem(sa,a),!0}catch(e){return console.error("putAccessToken: error: ",e),!1}}function Nn(){try{return localStorage.removeItem(sa),!0}catch(a){return console.error("removeAccessToken: error: ",a),!1}}const Al=["/login","/register"];function Kt(a){const e=Nt(),t=!!It();return Al.includes(e)&&t?(location.hash="/",null):a}function ie(a){return!It()?(location.hash="/login",null):a}function On(){Nn()}const Pl=Object.freeze(Object.defineProperty({__proto__:null,checkAuthenticatedRouteOnly:ie,checkUnauthenticatedRouteOnly:Kt,getAccessToken:It,getLogout:On,putAccessToken:Cl,removeAccessToken:Nn},Symbol.toStringTag,{value:"Module"}));var $e,gt,Un;class Rl{constructor(){p(this,gt);p(this,$e,null)}async render(){return`
    <div id="form-container-login" class="bg-base-100 w-full flex justify-center items-center">
      <div id="container-alert"></div>
        <div class="w-96 card bg-base-100 shadow-sm">
          <form action="" id="login-form">
            <div class="px-10 py-6">
              <h1 class="text-primary text-2xl font-bold text-center mb-5">Masuk Akun</h1>
              <div class="flex flex-col gap-y-2 mb-3">
                <label for="email">Email</label>
                <input id="email" type="email" class="input validator w-full" placeholder="name@gmail.com" required />
                <p class="validator-hint hidden">email wajib diisi!</p>
              </div>
              <div class="flex flex-col gap-y-2 mb-3">
                <label for="password">Password</label>
                <input id="password" type="password" class="input validator w-full" placeholder="******" minlength="8" required />
                <p class="validator-hint hidden">Wajib diisi! minimal 8 karakter</p>
              </div>
              <div id="submit-button">
                <button class="btn btn-neutral w-24">Masuk</button>
              </div>
            </div>
          </form>
          <div class="flex justify-center mb-6 gap-x-2">
            <span>Belum punya akun?</span>
              <a href="#/register" class="underline font-semibold text-neutral">Daftar</a>
          </div>
        </div>
      </div>
        `}async afterRender(){f(this,$e,new Ii({view:this,model:Mn,authModel:Pl})),this.contentHeight(),ne(this,gt,Un).call(this)}loginSuccessfully(e){console.log("data: ",e),location.hash="/"}contentHeight(){const e=document.querySelector("header"),t=document.querySelector("footer"),n=document.querySelector("#form-container-login");n.style.height=`calc(100vh - ${e.clientHeight+t.clientHeight}px)`}showLoadingButton(){document.getElementById("submit-button").innerHTML='<button class="btn btn-neutral w-24"><span class="loading loading-spinner text-success"></span></button>'}hideLoadingButton(){document.getElementById("submit-button").innerHTML='<button class="btn btn-neutral w-24">Masuk</button>'}}$e=new WeakMap,gt=new WeakSet,Un=function(){document.getElementById("login-form").addEventListener("submit",async e=>{const t={email:document.getElementById("email").value,password:document.getElementById("password").value};await u(this,$e).getLogin(t)})};var J,He;class Ll{constructor({view:e,model:t}){p(this,J);p(this,He);f(this,J,e),f(this,He,t)}async getRegistered({email:e,password:t}){u(this,J).showLoadingButton();try{const n=await u(this,He).register({email:e,password:t});if(console.log("response: ",n),!n){console.error("getRegistered: response: ",n);return}u(this,J).registeredSuccessfully(n)}catch(n){console.error("getRegistered: ",n)}finally{u(this,J).hideLoadingButton()}}}J=new WeakMap,He=new WeakMap;var Fe,ft,Bn;class xl{constructor(){p(this,ft);p(this,Fe,null)}async render(){return`
    <div id="form-container-register" class="bg-base-100 w-full flex justify-center items-center">
        <div class="w-96 card bg-base-100 shadow-sm">
            <form action="" id="register-form">
                <div class="px-10 py-6">
                    <h1 class="text-primary text-2xl font-bold text-center mb-5">Daftar Akun</h1>
                    <div class="validation-name flex flex-col gap-y-2 mb-3">
                        <label for="username">Username</label>
                        <input id="username" type="text" class="input validator w-full" placeholder="a.k.a..." required />
                        <p class="validator-hint hidden">Wajib diisi!</p>
                    </div>
                    <div class="validation-email flex flex-col gap-y-2 mb-3">
                        <label for="email">Email</label>
                        <input id="email" type="email" class="input validator w-full" placeholder="name@gmail.com" required />
                        <p class="validator-hint hidden">Wajib diisi!</p>
                    </div>
                    <div class="validation-password flex flex-col gap-y-2 mb-3">
                        <label for="password">Password</label>
                        <input id="password" type="password" class="input validator w-ful" placeholder="******" minlength="8" required />
                        <p class="validator-hint hidden">Wajib diisi! Minimal 8 karakter</p>
                    </div>
                    <div id="submit-button">
                      <button class="btn btn-neutral w-24">Daftar</button>
                    </div>
                </div>
            </form>
            <div class="flex justify-center mb-6 gap-x-2">
                <span>Sudah punya akun?</span>
                <a href="#/login" class="underline font-semibold text-neutral">Masuk
                </a>
            </div>
        </div>
    </div>
    `}async afterRender(){f(this,Fe,new Ll({view:this,model:Mn})),this.contentHeight(),ne(this,ft,Bn).call(this);const e=document.querySelector("header");e&&(e.style.display="block")}registeredSuccessfully(e){console.log(e),location.hash="/login"}contentHeight(){const e=document.querySelector("header"),t=document.querySelector("footer"),n=document.querySelector("#form-container-register");n.style.height=`calc(100vh - ${e.clientHeight+t.clientHeight}px)`}showLoadingButton(){document.getElementById("submit-button").innerHTML='<button class="btn btn-neutral w-24"><span class="loading loading-spinner text-success"></span></button>'}hideLoadingButton(){document.getElementById("submit-button").innerHTML='<button class="btn btn-neutral w-24">Daftar</button>'}}Fe=new WeakMap,ft=new WeakSet,Bn=function(){document.getElementById("register-form").addEventListener("submit",async e=>{e.preventDefault();const t={username:document.getElementById("username").value,email:document.getElementById("email").value,password:document.getElementById("password").value};await u(this,Fe).getRegistered(t)})};const Ba={"/":()=>ie(new oi),"/list-class":()=>ie(new ci),"/my-class/my":()=>ie(new yi),"/my-class/:id/corridor":()=>ie(new ki),"/my-class/:id/module/:moduleId":()=>ie(new vi),"/login":()=>Kt(new Rl),"/register":()=>Kt(new xl)};var me,Ve,We,ze,Y,Z,Gt,jn;class Dl{constructor({content:e,headerList:t,navigationDrawer:n,headerPoint:i}){p(this,Z);p(this,me);p(this,Ve);p(this,We);p(this,ze);p(this,Y);f(this,me,e),f(this,Ve,t),f(this,We,n),f(this,ze,i),f(this,Y,ot())}async renderPage(){const e=Nt(),t=Ba[e]||Ba["/"];let n=e;e.startsWith("my-class")?n="my-class":e==="/"&&(n="dashboard");const i=t();if(!document.startViewTransition){u(this,me).innerHTML=await i.render(),await i.afterRender(),ne(this,Z,Gt).call(this,n);return}const r=ne(this,Z,jn).call(this);let s=null,o=null;if(r==="list-to-detail"&&t){const c=qt();s=document.querySelector(`
        .card[data-courseId="${c.id}"] .vt-item-image
        `),s&&(s.style.viewTransitionName="detail-image")}r==="detail-to-list"&&t&&(o=document.querySelector(".vt-detail-image"),o&&(o.style.viewTransitionName="detail-image"));const l=fi({updateDOM:async()=>{if(u(this,me).innerHTML=await i.render(),await i.afterRender(),r==="detail-to-list"&&t){const c=Fn(u(this,Y));s=document.querySelector(`
        .card[data-courseId="${c.id}"] .vt-item-image
        `),s&&(s.style.viewTransitionName="detail-image")}}});l.ready.catch(console.error),l.updateCallbackDone.then(()=>{scrollTo({top:0,behavior:"instant"}),ne(this,Z,Gt).call(this,n)}).catch(console.error),l.finished.then(()=>{s&&(s.style.viewTransitionName=""),o&&(o.style.viewTransitionName=""),f(this,Y,ot())})}}me=new WeakMap,Ve=new WeakMap,We=new WeakMap,ze=new WeakMap,Y=new WeakMap,Z=new WeakSet,Gt=function(e){const t=!!It(),n=u(this,Ve),i=u(this,We).children.namedItem("drawer"),r=u(this,ze);if(n.innerHTML=Gn(e),i.innerHTML=Kn(e),!t){r.innerHTML=qn();return}r.innerHTML=Jn(),document.getElementById("logout-btn").addEventListener("click",s=>{s.preventDefault(),confirm("apakah anda yakin untuk keluar?")&&(On(),location.hash="/login")})},jn=function(){const e=Hn(u(this,Y)),t=Nt(),n=["/my-class/my"],i=["/my-class/:id/corridor"];return n.includes(e)&&i.includes(t)?"list-to-detail":i.includes(e)&&n.includes(t)?"detail-to-list":null};document.addEventListener("DOMContentLoaded",async()=>{const a=new Dl({content:document.getElementById("main-content"),headerList:document.getElementById("header-list"),navigationDrawer:document.getElementById("navigation-drawer"),headerPoint:document.getElementById("header-point")});await a.renderPage(),window.addEventListener("hashchange",async()=>{await a.renderPage()})});
