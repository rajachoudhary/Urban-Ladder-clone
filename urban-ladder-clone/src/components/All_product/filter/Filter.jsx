import React from "react";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import "tippy.js/themes/light.css";
import { Brand } from "./Brand";
import { Size } from "./Size";
import { Feature } from "./Feature";
import { Material } from "./Material";
import { Finish } from "./Finish";
import { Price } from "./Price";
import styles from "../all_product.module.css";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Recommends } from "./Recommends";
import SliderProton from "./SliderProton";
export const Filter = ({handleFilter,selectedPrice,changedPrice}) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        width: "950px",
        margin: "auto",
        fontSize: "12px",
      }}
    >
      <div style={{ display: "flex", justifyContent: "center", gap: "1vh" }}>
        <div className={styles.parameter}>
          <Tippy
            offset={[10, 1]}
            placement="bottom"
            theme="light"
            content={<SliderProton value={selectedPrice} changedPrice={changedPrice}/>}
            interactive={true}
          >
            <span>
              <button>Price</button>
              <ArrowDropDownIcon></ArrowDropDownIcon>
            </span>
          </Tippy>
        </div>
        <div className={styles.parameter}>
          <Tippy
            offset={[60, 19]}
            theme="light"
            content={<Feature></Feature>}
            interactive={true}
          >
            <span>
              <button>Feature</button>
              <ArrowDropDownIcon></ArrowDropDownIcon>
            </span>
          </Tippy>
        </div>
        <div className={styles.parameter}>
          <Tippy
            offset={[60, 19]}
            theme="light"
            content={<Material></Material>}
            interactive={true}
          >
            <span>
              <button>Material</button>
              <ArrowDropDownIcon />
            </span>
          </Tippy>
        </div>
        <div className={styles.parameter}>
          <Tippy
            offset={[60, 19]}
            theme="light"
            content={<Finish></Finish>}
            interactive={true}
          >
            <span>
              <button>Finish</button>
              <ArrowDropDownIcon />
            </span>
          </Tippy>
        </div>
        <div className={styles.parameter}>
          <Tippy
            offset={[30, 19]}
            theme="light"
            content={<Size></Size>}
            interactive={true}
            placement ="bottom"
          >
            <span>
              <button>Size</button>
              <ArrowDropDownIcon />
            </span>
          </Tippy>
        </div>
        <div className={styles.parameter}>
          <Tippy
            offset={[80, 19]}
            theme="light"
            content={<Brand></Brand>}
            interactive={true}
          >
            <span>
              <button>Brand</button>
              <ArrowDropDownIcon />
            </span>
          </Tippy>
        </div>
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: "2vh" }}>
        <span
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <input type="checkbox" />
          <p style={{ margin: "0px" }}>Exclude Out Of Stock</p>
        </span>
        <Tippy
          offset={[10, 1]}
          placement="bottom"
          theme="light"
          content={<Recommends handleFilter={handleFilter}/>}
          interactive={true}
        >
          <span className={styles.recommend_btn}>
            <button>Recommended</button>
            <ArrowDropDownIcon></ArrowDropDownIcon>
          </span>
        </Tippy>
      </div>
    </div>
  );
};