import {
  IonButton,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
// import { Responsive, WidthProvider } from "react-grid-layout";
import GridLayout from "react-grid-layout";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { SizeMe } from "react-sizeme";
// const ResponsiveGridLayout = WidthProvider(Responsive);
const ContentContainer = styled.div`
  position: absolute;
  top: ${(props) => props.topValue};
  width: 100%;
  bottom: 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
`;

const GridContainer = styled.div`
  overflow: auto;
  height: 100%;
  width: ${(props) => props.widhtValue.toString() + "px"};
`;

const GridComp = () => {
  const buttons = useSelector(
    (state) => state.gridItemsSlice.gridItemsData.buttons
  );
  const gridLayouts = useSelector(
    (state) => state.gridItemsSlice.gridItemsData.gridLayouts
  );
  const gridItemsData = useSelector(
    (state) => state.gridItemsSlice.gridItemsData
  );
  return (
    <IonPage>
      <SizeMe>
        {({ size }) => (
          <>
            {gridItemsData.isHeaderEnabled && (
              <IonHeader>
                <IonToolbar>
                  <IonTitle>{gridItemsData.headerTitle}</IonTitle>
                </IonToolbar>
              </IonHeader>
            )}
            <ContentContainer topValue={gridItemsData.headerTopValue}>
              <GridContainer widhtValue={size.width}>
                {/* <ResponsiveGridLayout
                  className="layout"
                  layouts={gridLayouts}
                  breakpoints={{lg:1200,md:996,sm:768,xs:480,xxs:0}}
                  cols={{lg:3,md:3,sm:3,xs:3,xxs:3}}
                  rowHeights={35}
                  compactType="none"
                  autoSize={false}
                  onLayoutChange={(e) => console.log(e)}
                > */}
                <GridLayout
                  className="layout"
                  layout={gridLayouts}
                  cols={3}
                  rowHeight={35}
                  width={size.width}
                >
                  {Object.keys(buttons).map((index) => {
                    return (
                      <IonButton key={buttons[index].key}>
                        {buttons[index].name}
                      </IonButton>
                    );
                  })}
                </GridLayout>

                {/* </ResponsiveGridLayout> */}
              </GridContainer>
            </ContentContainer>
          </>
        )}
      </SizeMe>
    </IonPage>
  );
};

export default GridComp;
