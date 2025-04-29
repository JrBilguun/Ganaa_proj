import {
  faCarAlt,
  faEarthAfrica,
  faPeopleRoof,
  faScrewdriverWrench,
} from "@fortawesome/free-solid-svg-icons";

// ЦЭСНИЙ ӨГӨГДӨЛ
export const navItemsData = [
  { id: 0, title: "Нүүр", href: "/" },
  { id: 1, title: "Дэлгүүр", href: "/shop" },
  { id: 2, title: "Бидний тухай", href: "/about" },
  { id: 3, title: "Холбоо барих", href: "/contact" },
  { id: 4, title: "Блог", href: "/blogs" },
];

// НҮҮР СЛАЙДЫН ӨГӨГДӨЛ
export const homeSlideData = [
  {
    id: 0,
    src: "/photos/Banner2.png",
    heading: "Сайн уу👋! Тавтай морилно уу",
    subHeading: "Манай Обуд",
    paragraph:
      "Энд таны автомашинд зориулсан хамгийн чанартай обудуудыг санал болгож байна. Биднээс дэлгүүр хэсээд гайхалтай сонголтыг хийгээрэй.",
  },
  {
    id: 1,
    src: "/photos/Banner3.png",
    heading: "Та🫵! Тавтай морилно уу",
    subHeading: "Манай Обуд",
    paragraph:
      "Манайхаас обуд худалдан авснаар танд тохирох авто засварын газрыг санал болгож, туршлагатай мэргэжилтнүүд таны обудыг суурилуулахад тусална.",
  },
  {
    id: 2,
    src: "/photos/Banner1.png",
    heading: "Тийм ээ та👊! Тавтай морилно уу",
    subHeading: "Манай Обуд",
    paragraph:
      "Та Premium үйлчилгээнд бүртгүүлснээр илүү хурдан, хөнгөлөлттэй үйлчилгээ авах боломжтой гэдгийг мэдэх үү?",
  },
];

// АМЖИЛТЫН ҮЗҮҮЛЭЛТ
export const achievementData = [
  {
    id: 0,
    start: 0,
    end: 1000,
    icon: faPeopleRoof,
    symbol: "+",
    description: "Нийгэмд үзүүлсэн нөлөө",
  },
  {
    id: 1,
    start: 0,
    end: 25,
    icon: faEarthAfrica,
    symbol: "",
    description: "Улсын хэмжээний сүлжээ",
  },
  {
    id: 2,
    start: 0,
    end: 1000,
    icon: faCarAlt,
    symbol: "+",
    description: "Дотоод болон олон улсад борлуулсан",
  },
  {
    id: 3,
    start: 0,
    end: 75,
    icon: faScrewdriverWrench,
    symbol: "%",
    description: "Сэтгэл хангалуун үйлчлүүлэгчид",
  },
];

// ХАМТРАН АЖИЛЛАГЧИД
export const partnersData = [
  { id: 0, src: "/partners-images/partner1.jpg" },
  { id: 1, src: "/partners-images/audi-11-logo-svgrepo-com.svg" },
  { id: 2, src: "/partners-images/partner2.jpg" },
  { id: 3, src: "/partners-images/partner3.jpg" },
  { id: 4, src: "/partners-images/bank-svgrepo-com.svg" },
  { id: 5, src: "/partners-images/partner4.jpg" },
  { id: 6, src: "/partners-images/partner5.jpg" },
  { id: 7, src: "/partners-images/partner6.svg" },
  { id: 8, src: "/partners-images/partner7.svg" },
  { id: 9, src: "/partners-images/partner8.svg" },
  { id: 10, src: "/partners-images/partner9.jpg" },
];

// СЭТГЭГДЛҮҮД
export const reviewsData = [
  {
    id: 0,
    src: "/profile-images/person1.jpg",
    title: "Хэрэглэгч1",
    testimony: "Гайхалтай үйлчилгээ, обудны чанар өндөр байсан. Баярлалаа!",
    more: "...Дэлгэрэнгүй",
  },
  {
    id: 1,
    src: "/profile-images/person2.jpg",
    title: "Хэрэглэгч2",
    testimony: "Эндээс авсан обуд маань яг таарсан. Маш хурдан хүргэлттэй.",
    more: "...Дэлгэрэнгүй",
  },
  {
    id: 2,
    src: "/profile-images/person3.jpg",
    title: "Хэрэглэгч3",
    testimony: "Үнэхээр сэтгэл хангалуун байна. Дахин үйлчлүүлнэ.",
    more: "...Дэлгэрэнгүй",
  },
  {
    id: 3,
    src: "/profile-images/person4.jpg",
    title: "Хэрэглэгч4",
    testimony: "Үнийн хувьд боломжийн бөгөөд чанар сайн.",
    more: "...Дэлгэрэнгүй",
  },
  {
    id: 4,
    src: "/profile-images/person5.jpg",
    title: "Хэрэглэгч5",
    testimony: "Хэрэглэгчийн үйлчилгээ маш сайн, зөвлөгөө өгсөнд баярлалаа.",
    more: "...Дэлгэрэнгүй",
  },
  {
    id: 5,
    src: "/profile-images/person6.jpg",
    title: "Хэрэглэгч6",
    testimony: "Шинэ обуд маань үнэхээр гоё харагдаж байна!",
    more: "...Дэлгэрэнгүй",
  },
  {
    id: 6,
    src: "/profile-images/person7.jpg",
    title: "Хэрэглэгч7",
    testimony: "Хурдан хүргэлт, найдвартай үйлчилгээ.",
    more: "...Дэлгэрэнгүй",
  },
];

// АСУУЛТ ХАРИУЛТ
export const QuestionAndAnswer = [
  {
    id: 0,
    question: "Би зөв обудыг яаж сонгох вэ?",
    answer:
      "Манай зөвлөхүүд таны автомашинд тохирсон обудыг сонгоход туслах болно.",
  },
  {
    id: 1,
    question: "Хүргэлт хэр хурдан байдаг вэ?",
    answer: "Дотоодын хүргэлт 1-3 хоногт хийгддэг.",
  },
  {
    id: 2,
    question: "Обуд суурилуулах үйлчилгээтэй юу?",
    answer: "Тийм ээ, бид танд мэргэжлийн суурилуулалт санал болгодог.",
  },
  {
    id: 3,
    question: "Хэрэв обуд маань тохирохгүй бол сольж болох уу?",
    answer: "Бид тодорхой нөхцөлтэйгөөр солилт хийх боломжтой.",
  },
  {
    id: 4,
    question: "Төлбөрийн ямар аргыг дэмждэг вэ?",
    answer: "Бид бэлэн мөнгө, картаар болон онлайн төлбөрийг хүлээн авдаг.",
  },
  {
    id: 5,
    question: "Таны обудууд баталгаатай юу?",
    answer: "Тийм ээ, бүх обудууд маань үйлдвэрийн баталгаатай.",
  },
];

// БАННЕРЫН МЭДЭЭЛЭЛ
export const ContactBannerData = [
  {
    id: 1,
    imageBanner: "/photos/Banner7.png",
    heading: "ХОЛБОО",
    subHeading: "Та мэдэх үү?",
    offPercentage: "50%",
    paragraphOne:
      "Бидний борлуулалтын бүхээгийн үйл ажиллагаа ба Блэк-Фрайдейг хүндэтгэн тогтмол хөнгөлөлт үзүүлэх уламжлалтай.",
    paragraphTwo:
      "Бид хямдхан бараа биш, хямд бөгөөд чанартай бүтээгдэхүүн борлуулдаг. Бид таны мөнгийг зөвхөн ашигтай худалдан авалтад зориулж хэрэглэнэ, учир нь бид хямд нь үнэтэй гэж итгэдэг. Бидний үйлчилгээ нь таныг дахин харамсахгүй байх болно!",
  },
];

export const aboutBannerData = [
  {
    id: 1,
    imageBanner: "/photos/Banner6.png",
    heading: "БИДНИЙ ТУХАЙ",
    subHeading: "Та мэдэх үү?",
    offPercentage: "50%",
    paragraphOne:
      "Бидний борлуулалтын бүхээгийн үйл ажиллагаа ба Блэк-Фрайдейг хүндэтгэн тогтмол хөнгөлөлт үзүүлэх уламжлалтай.",
    paragraphTwo:
      "Бид хямдхан бараа биш, хямд бөгөөд чанартай бүтээгдэхүүн борлуулдаг. Бид таны мөнгийг зөвхөн ашигтай худалдан авалтад зориулж хэрэглэнэ, учир нь бид хямд нь үнэтэй гэж итгэдэг. Бидний үйлчилгээ нь таныг дахин харамсахгүй байх болно!",
  },
];

export const shopBannerData = [
  {
    id: 1,
    imageBanner: "/images/6c0aa13c37e96026a8736556ef6af051.jpg",
    heading: "ҮЙЛЧИЛГЭЭ",
    subHeading: "Та мэдэх үү?",
    offPercentage: "50%",
    paragraphOne:
      "Бидний борлуулалтын бүхээгийн үйл ажиллагаа ба Блэк-Фрайдейг хүндэтгэн тогтмол хөнгөлөлт үзүүлэх уламжлалтай.",
    paragraphTwo:
      "Бид хямдхан бараа биш, хямд бөгөөд чанартай бүтээгдэхүүн борлуулдаг. Бид таны мөнгийг зөвхөн ашигтай худалдан авалтад зориулж хэрэглэнэ, учир нь бид хямд нь үнэтэй гэж итгэдэг. Бидний үйлчилгээ нь таныг дахин харамсахгүй байх болно!",
  },
];

export const blogsBannerData = [
  {
    id: 0,
    heading: "Автомашины Мэдээ",
    imageBanner1: "/photos/challenger-5880009_640.jpg",
    imageBanner2: "/photos/5abc50acafa29cb8c81f69a89c22e499.jpg",
    paragraph: `Бид автомашины салбараас хамгийн сүүлийн үеийн мэдээ болон халуун мэдээллийг хүргэж байна. "Өдөр бүрийн мэдээ" манайхаас сонсох нь таныг зөвхөн найдвартай эх сурвалжаас мэдээ авах боломжтой гэдгийг баталгаажуулж, сонирхсон мэдээллийг авах болно.`,
  },
];

// ТУХАЙ МЭДЭЭЛЭЛ
export const aboutData = [
  {
    id: 0,
    title: "БИДНИЙ ТҮҮХ",
    body: "",
  },
  {
    id: 1,
    title: "БИДНИЙ ТӨЛӨВЛӨГӨӨ",
    body: "",
  },
  {
    id: 2,
    title: "БИДНИЙ ХАРАА",
    body: "",
  },
];

// БЛОГ МЭДЭЭЛЭЛ
export const blogsData = [
  {
    id: 0,
    image:
      "https://i.pinimg.com/236x/d8/d0/14/d8d014682e020cd36348a2fe8f6130e4.jpg",
    heading: "Blah Blah Blah...",
    paragraph: "",
  },

  {
    id: 1,
    image:
      "https://i.pinimg.com/236x/8e/ad/3b/8ead3b380470fbfad34589e39debeb96.jpg",
    heading: "Blah Blah Blah...",
    paragraph: "",
  },
  {
    id: 2,
    image:
      "https://i.pinimg.com/236x/aa/fd/67/aafd672e6de7aa9181d5a03e2a3a0974.jpg",
    heading: "Blah Blah Blah...",
    paragraph: "",
  },
  {
    id: 3,
    image:
      "https://i.pinimg.com/474x/10/fa/18/10fa18a247ce48724a64df977a0b353e.jpg",
    heading: "Blah Blah Blah...",
    paragraph: "",
  },
  {
    id: 4,
    image:
      "https://i.pinimg.com/236x/24/73/89/24738946ef08532752ae7b81d0555623.jpg",
    heading: "Blah Blah Blah...",
    paragraph: "",
  },
  {
    id: 5,
    image:
      "https://i.pinimg.com/736x/82/a5/78/82a578b30bc712d8239b637714d6a6e5.jpg",
    heading: "Blah Blah Blah...",
    paragraph: "",
  },
  {
    id: 6,
    image:
      "https://i.pinimg.com/474x/37/1a/f5/371af55ddbea76858111f98cb244d869.jpg",
    heading: "Blah Blah Blah...",
    paragraph: "",
  },
  {
    id: 7,
    image:
      "https://i.pinimg.com/236x/c6/47/f1/c647f1ec7b2c149ed06e640b8b40ed4f.jpg",
    heading: "Blah Blah Blah...",
    paragraph: "",
  },
  {
    id: 8,
    image:
      "https://i.pinimg.com/236x/96/ce/e9/96cee9de21f97b99ff925fc75393244a.jpg",
    heading: "Blah Blah Blah...",
    paragraph: "",
  },
  {
    id: 9,
    image:
      "https://i.pinimg.com/236x/bd/06/8c/bd068cbe0ca236da59fd0011cd39a459.jpg",
    heading: "Blah Blah Blah...",
    paragraph: ".",
  },
];
