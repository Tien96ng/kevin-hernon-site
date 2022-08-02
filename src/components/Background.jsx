import React from "react";
import Image from "next/image";
// import mushroom from '../Image/mushroom.jpg'
// import mushroom1 from '../Image/mushroom1.png'
// import mushroom2 from '../Image/mushroom2.png'
import blue_mushroom from "../../public/img/blue_mushroom.png";
import teemo from "../../public/img/teemo.png";
import veigar from "../../public/img/veigar.png";
import fizz from "../../public/img/fizz.png";
import corki from "../../public/img/corki.png";
import style from "../../styles/Background.module.css";

export default function Background() {
  return (
    <div className={style.body}>
      <div id={`${style.clouds}`}>
        <div className={`${style.cloud} ${style.x1}`}></div>
        <div className={`${style.cloud} ${style.x2}`}></div>
        <div className={`${style.cloud} ${style.x3}`}></div>
        <div className={`${style.cloud} ${style.x4}`}></div>
        <div className={`${style.cloud} ${style.x5}`}></div>
      </div>
    </div>
  );
}

// export default function Background() {
//   return (
//     <>
//       <div className={style.area}>
//         <ul className={style.circles}>
//             <li><Image src={teemo} className={style.mushroom} alt="blue mushroom"/></li>
//             <li><Image src={teemo} className={style.mushroom} alt="blue mushroom"/></li>
//             <li><Image src={veigar} className={style.mushroom2} alt="blue mushroom"/></li>
//             <li><Image src={corki} className={style.mushroom} alt="blue mushroom"/></li>
//             <li><Image src={fizz} className={style.mushroom4} alt="blue mushroom"/></li>
//             <li><Image src={fizz} className={style.mushroom3} alt="blue mushroom"/></li>
//             <li><Image src={fizz} className={style.mushroom3} alt="blue mushroom"/></li>
//             <li><Image src={fizz} className={style.mushroom3} alt="blue mushroom"/></li>
//             <li><Image src={teemo} className={style.mushroom} alt="blue mushroom"/></li>
//             <li><Image src={corki} className={style.mushroom3} alt="blue mushroom"/></li>
//             <li><Image src={teemo} className={style.mushroom} alt="blue mushroom"/></li>
//         </ul>
//       </div>
//     </>
//   );
// }
