import React from 'react'
import styles from "./Services.module.css"
import Tiles from "./Tiles"

function Services() {
  return (
    <section className={styles.servicesWrapper}>
      <div className={styles.topContainer}>
        <div className={styles.headingBox}>
          <div className={styles.smallHeading}>Our Services</div>
          <div className={styles.largeHeading}>Specialized Storage for Every Special Item</div>
        </div>
        <div className={styles.paragraph}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie nisl sed dui lacinia gravida. Nulla quis nulla leo. Mauris ac blandit nisi non sodales augue. Phasellus eget elit gravida.
        </div>
      </div>
      <div className={styles.bottomContainer}>
        <div className={styles.tilesLeft}>
          <Tiles
          size="large"
          title="Diverse Unit Sizes"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
          />
          <Tiles
          size="large"
          title="Moving Assistance"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
          />
        </div>
        <div className={styles.image}></div>
        <div className={styles.tilesRight}>
            <Tiles
          size="large"
          title="Vehicle Storage"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
          />
          <Tiles
          size="large"
          title="Top-Notch Security"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
          />
        </div>
      </div>
    </section>
  )
}

export default Services