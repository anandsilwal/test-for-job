
function loadTabData() {
  var mainTab = `Surtsey ("Surtr's island" in Icelandic, Icelandic pronunciation:
 ​[ˈsʏr̥(t)sˌeiː]) is a volcanic island located in the
 Vestmannaeyjar archipelago off the southern coast of Iceland. At
 WikiMiniAtlas63.303°N 20.605°WCoordinates: 63.303°N 20.605°W,
 Surtsey is the southernmost point of Iceland.[1] It was formed in
 a volcanic eruption which began 130 metres (430 feet) below sea
 level, and reached the surface on 14 November 1963. The eruption
 lasted until 5 June 1967, when the island reached its maximum size
 of 2.7 km2 (1.0 sq mi). Since then, wave erosion has caused the
 island to steadily diminish in size: as of 2012, its surface area
 was 1.3 km2 (0.50 sq mi).[2] The most recent survey (2007) shows
 the island's maximum elevation at 155 m (509 ft) above sea
 level.[3]`;

  var tabDatas = ["This is dummy data for tab1", "This is dummy data for tab2", mainTab, "This is dummy data for tab4", "This is dummy data for tab5", "This is dummy data for tab6", "This is dummy data for tab7"];

  var allTabs = document.getElementsByClassName("tabcontent");

  for (item in allTabs) {
    var id = parseInt(item);
    if (id == 2) {
      const para= document.getElementById("defaultTab");
      const node = document.createTextNode(tabDatas[id]);
      para.appendChild(node);
    }
    if (id >= 0 && id!=2) {
      
      const para = document.createElement("p");
      const node = document.createTextNode(tabDatas[item]);
      para.appendChild(node);

      allTabs[id].appendChild(para);
    }
  }

}
loadTabData();

