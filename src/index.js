import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>回收易拉罐</h1>
      <p>回收匹配系统</p>
      <h2>背景</h2>
      <p>
        不少新移民生活在美国，由于语言问题，无法融入美国主流社会，被迫无奈以拾荒为生。
        本项目的目的在于让回收者能有一个更有效率的回收方式，以解决他们在美国临时窘迫的生活条件。
        甚至不少人在收集废品的时候，被误认为是盗贼，而面临不必要的麻烦。
      </p>
      <h2>建议</h2>
      <ol>
        <li>
          不少地方社区其实对拾荒者还是比较友好，如果拾荒者自信一些，愿意去交流，还是很多人愿意提供帮助的。
        </li>
        <li>公共场合，尤其是体育运动的地方是收集废品的好地方</li>
        <li>在收垃圾的前几个小时，是比较好的收废品的时间段</li>
      </ol>
      <h2>规则</h2>
      <ol>
        <li>
          拾荒者，登记您的信息，我们将进行加密以保障您的联系方式不被他人轻易获取；我们将对拾荒者进行评分，让更好的拾荒者获得更多的机会。
        </li>
        <li>
          捐赠者，你可以登记你的信息，我们等您的易拉罐收集到足够多，我们将匹配相应的拾荒者上面获取易拉罐。
        </li>
      </ol>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
