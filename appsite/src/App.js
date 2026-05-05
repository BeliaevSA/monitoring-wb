import AppSite from "./AppSite";
import ManagerPresentation from "./ManagerPresentation";
import PartnerPresentation from "./PartnerPresentation";
 
// Роутинг по домену — один контейнер, три страницы
const ROUTES = {
  // мониторинг-вб.рф
  "xn----btbccya0aicgcyy.xn--p1ai":        AppSite,
  "www.xn----btbccya0aicgcyy.xn--p1ai":    AppSite,
 
  // менеджерам.мониторинг-вб.рф
  "xn--80ahcabf2bgd8a.xn----btbccya0aicgcyy.xn--p1ai":      ManagerPresentation,
  "www.xn--80ahcabf2bgd8a.xn----btbccya0aicgcyy.xn--p1ai":  ManagerPresentation,
 
  // партнерам.мониторинг-вб.рф
  "xn--80aao3ackicp.xn----btbccya0aicgcyy.xn--p1ai":        PartnerPresentation,
  "www.xn--80aao3ackicp.xn----btbccya0aicgcyy.xn--p1ai":    PartnerPresentation,
};
 
export default function App() {
  const host = window.location.hostname;
  const Component = ROUTES[host] ?? AppSite;
  return <Component />;
}
 
