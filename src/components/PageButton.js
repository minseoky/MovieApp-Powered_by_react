import styles from "../css/styles_Button.module.css";
const pageStart = 1;
const pageEnd = 10;
function PageBtn({pages, setPages, setLoading}){

    const leftpage = () => {
        setLoading(true);
        setPages(pages-1);
    }
    const rightpage = () => {
        setLoading(true);
        setPages(pages+1);
    }
    return(
        <div className={styles.pagebtn}>
            <button className={styles.arrowbtn} disabled={pages === pageStart ? true : false} onClick={leftpage}> ← </button>
            {pages}
            <button className={styles.arrowbtn} disabled={pages === pageEnd ? true : false} onClick={rightpage}> → </button>
        </div>
    )
}
export default PageBtn;