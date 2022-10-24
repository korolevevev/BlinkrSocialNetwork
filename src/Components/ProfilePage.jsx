import {PostList} from "./PostList";

export const ProfilePage = () => {
    return (
        <div className="container-fluid p-4 h-100">
            <img className='img-fluid rounded-3' style={{height: '100px', width: '100%'}}
                 src="https://png.pngtree.com/thumb_back/fh260/background/20210728/pngtree-sunset-petals-shape-orange-abstract-paper-cut-style-background-image_750915.jpg"
                 alt=""/>
            <div className="d-flex mt-5 align-items-center">
                <img className='border-primary' style={{borderRadius: '50%', border: '5px solid'}} src="https://i.pinimg.com/originals/08/58/56/0858566dcb0ad59eced7d409bb84912d.jpg" alt="" width='200px' height='200px'/>
                <div className="ms-5 text-secondary">
                    <h2 className='text-primary'>Lil Uzi Vert</h2>
                    <p>Date of birth: 01.01.2012</p>
                    <p>City: LA</p>
                    <p>Education: MIT</p>
                </div>
            </div>
            <PostList />
        </div>
    )
}