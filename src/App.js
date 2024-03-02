
import AppleIndex from "./components/Apple/AppleIndex";
import DepartemntIndex from "./components/Department/DepartemntIndex";
import DownFooter from "./components/Footer/DownFooter";
import HeaderIndex from "./components/Header/HeaderIndex";
import HeroIndex from "./components/Hero/HeroIndex";
import SellingIndex from "./components/OnSelleing/SellingIndex";
import SellingProductsIndex from "./components/SellingProducts/SellingProductsIndex";
import VendorIndex from "./components/Vendors/VendorIndex";
import ViewIndex from "./components/View/ViewIndex";
import BrandsIndex from "./components/brands/BrandsIndex";
import CategoryIndex from "./components/categories/CategoryIndex";
import DealIndex from "./components/deals/DealIndex";
import DiscoverIndex from "./components/discover/DiscoverIndex";



function App() {
  return (
    <>
<HeaderIndex/>
<HeroIndex/>
<DepartemntIndex/>
<DealIndex/>
<SellingIndex/>
<SellingProductsIndex/>
<AppleIndex/>
<CategoryIndex/>
<ViewIndex/>
<BrandsIndex/>
<VendorIndex/>
<DiscoverIndex/>
<DownFooter/>
    </>

  );
}

export default App;
