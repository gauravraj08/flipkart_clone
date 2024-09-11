import "./style.css";
import { renderNav } from "./renderNavCom";
import { carouselFn } from "./carousel";
import { renderElectronics } from "./showElectronic";
import { hover } from "./hoverJS";
import { renderList } from "./renderNavList";

carouselFn();
renderElectronics();
hover();
renderList();
