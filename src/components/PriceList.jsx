import React from 'react'
import styles from "./PriceList.module.css"
import Button from "./Button"

function PriceList({ price, size }) {
  return (
    <div className={styles.wrapper}>

        <div className={styles.topContainer}>
            <h5 className={styles.title}>{size} Unit</h5>
            <div className={styles.priceContainer}>
                <div className={styles.dollarSign}>$</div>
                <div className={styles.priceBox}>
                    <div className={styles.price}>{price}</div>
                    <div className={styles.month}>/month</div>
                </div>
            </div>
            <p className={styles.priceParagraph}>
                Phasellus sollicitudin sapien eu massa accumsan, quis semper odio suscipit.
            </p>
        </div>

        <div className={styles.breakLine}></div>

        <div className={styles.bottomContainer}>
            <div className={styles.infoContainer}>

                <div className={styles.infoBox}>
                    <div className={styles.checkBox}>
                        <div className={styles.checkMark}></div>
                    </div>
                    <div className={styles.info}>Nam nec ipsum in dolor</div>
                </div>

                <div className={styles.infoBox}>
                    <div className={styles.checkBox}>
                        <div className={styles.checkMark}></div>
                    </div>
                    <div className={styles.info}>Fusce nec ligula ut arcu</div>
                </div>

                <div className={styles.infoBox}>
                    <div className={styles.checkBox}>
                        <div className={styles.checkMark}></div>
                    </div>
                    <div className={styles.info}>Aliquam pulvinar arcu in</div>
                </div>

                <div className={styles.infoBox}>
                    <div className={styles.checkBox}>
                        <div className={styles.checkMark}></div>
                    </div>
                    <div className={styles.info}>Duis gravida enim porta</div>
                </div>

                <div className={styles.infoBox}>
                    <div className={styles.checkBox}>
                        <div className={styles.checkMark}></div>
                    </div>
                    <div className={styles.info}>Etiam eget libero non ligula</div>
                </div>

            </div>

            <div className={styles.buttonContainer}>
                <Button text="Rent Now" route="/contact" />
            </div>

        </div>
    </div>
  )
}

export default PriceList