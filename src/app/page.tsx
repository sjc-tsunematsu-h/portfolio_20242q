// import Image from "next/image";
import styles from "./page.module.css";
import PortfolioList from "@/_components/elements/Container/page"
import ContainerBox from "@/_components/elements/Title/page";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <ContainerBox title={'技能'}>
          <PortfolioList model={'skills'} />
        </ContainerBox>
      </div>
    </main>
  );
}
 