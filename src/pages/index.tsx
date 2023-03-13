import { BalanceCard, OurServices, Card } from "components";
 import { GeneralLayout } from "layouts";

const Home = () => {
  return (
    <GeneralLayout rightSide={<BalanceCard />}>
      <OurServices />
      <Card className="mt-5">
        
      </Card>
    </GeneralLayout>
  );
};

Home.mainLayoutProps = {
  title: "Talents Valley Home",
  pageDescription: "Home page description",
  contentClassName: "!block !p-0",
};

export default Home;
