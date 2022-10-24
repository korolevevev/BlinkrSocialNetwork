export const Header = () => {
    return (
        <div className='container-fluid d-flex flex-row text-white px-5 py-2 bg-primary align-items-center'>
            <img src="https://cdn140.picsart.com/235479918091212.png" alt="logo" width='50' height='50'/>
            <div className='d-flex flex-row position-relative'>
                <h1>blinkr</h1>
                <p className='position-absolute start-100'>social</p>
            </div>
        </div>
    )
}