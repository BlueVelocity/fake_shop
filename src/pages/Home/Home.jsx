import { use, useEffect, useState } from "react";
import { Link } from "react-router";
import styles from "./Home.module.css";
import NavBar from "../../components/NavBar/NavBar";
import sparkle from "/sparkle.png";
import crown from "/crown.png";
import money from "/money.png";

export default function Home({ cartContents }) {
  const [lastMessage, setLastMessage] = useState("Sell us your soul!");

  useEffect(() => {
    setTimeout(() => {
      setLastMessage("ψ ⛥̵̪͓̮̰́̒̏͒̌͘͝ ̵̢̰̹̞̦̩̮͔̻́͂̑̓⛥̷͕̟̗̰̉̾́͊̑̆̎͆ ̴͇͖͍̠̻̼̼̔̓̊☠̶̥̝̗͇͇͊̀̉̊̇̓ ̶͚̼̰̍͂͒͝J̴̧̡̼͈͍̲̱̖̗͆͊̾͐̂̇o̸͓̘͆͆̂́̽͂̈í̷͈͚͍͔̞͙̙͔̾̓͐̏̊͘̚n̸̢̦͉̫̥̫̞̆͐̐̎͂̅͋̃̕ ̶̗̺̩̖͇̒̔ȩ̷̛̯̼͊́͗͒͝t̶̨̳̫̺̖̻̰̊̍̓̿̃̄͂̕é̵͚͓̼̭̥̤͉̫̑̆͑͛ŕ̵̬̾͝n̴̝̜͕͔̟̍͜͝a̴̝̰̼̫͕̥̱̜̤͌̽̚͘l̶̡͔̻̻̩̖̟̉͊͑ ̶̳̯̘̜̱̯͕̦̌̆̑̌̆̚͜d̶̺͉̺̞̜̱͎̥̠̒̇́͗a̵̗͖̠̔̈͛͑͜m̶͎̣̙̤̈́͝ͅn̷̢̞̫̲͓̂̓͒͆̂͋̈́ȧ̶̡̭͖̱̥̀̾͂̈̆͊͑̇͜t̴̮̹̭͕̝͖̱̆͑͊̓̇͐ḯ̶̭͈̃͐̄̂͘͝ȏ̷̮̘͚͍̞͙̦̌n̴̡̦͓̹̰͇̻̈̊̕͝ͅ!̵̫̙̘̾ ̴̡͈̭̘͗̌́̽̄̎̈́̚͝⛧̶̭̠̭͐̎̚ ̸̡̧̩̬̰̱̭͖͆̂͆̈́͂̽̊̉ψ̷̡̼̮͉͖͈͍̹͓̉͆̆̓͌̿̕͝ ̸͍͕̭̙̗͓̈́⛥̷̪̹̠͙̜̤̊̓͒͂͝͠ ψ");
      setTimeout(() => setLastMessage("Buy Buy Buy!"), 100)
    }, 1500)
  }, [])

  return (
    <>
      <NavBar cartContents={cartContents} />
      <main className={styles.home}>
        <div className={styles.topPane}>
          <span className={styles.text}>Welcome to Fake Shop</span>
          <span className={styles.subText}>Discover amazing products at unbeatable prices!</span>
          <Link to="/shop"><button className={styles.button}>Shop Now!</button></Link>
        </div>
        <div className={styles.theSell}>
          <div>
            <img src={sparkle} alt="Sparkle" />
            <span>Treat yourself!</span>
          </div>
          <div>
            <img src={crown} alt="Crown" />
            <span>Spoil that special someone!</span>
          </div>
          <div>
            <img src={money} alt="Money" />
            <span>{lastMessage}</span>
          </div>
        </div>
      </main>
    </>
  )
}
