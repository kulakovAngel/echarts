import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { setTitle } from './../../helpers';

import './style.css';
import img1 from './echart1.png';
import img2 from './echart2.png';
import img3 from './echart3.png';

function PageHome(props) {
    
    setTitle('Home Page', props.pageTitle.title, props.dispatch);
    
    return (
        <>
            <section>
                <h2>The Echarts example</h2>
                <p>The service provides simple persons data entry and plotting the <a href='https://echarts.apache.org/examples/en/index.html'>Echart</a>.</p>
                <p>You may <Link to='/list'>view the list</Link> or <Link to='/echarts'>Echart</Link>, as well as enter new data.</p>
            </section>
            <section className='img-galery'>
                <figure className='img-galery__container'>
                    <img src={img1} alt='echart' className='img-galery__img' />
                    <figcaption className='img-galery__title'>Echart Example Lorem ipsum</figcaption>
                </figure>
                <figure className='img-galery__container'>
                    <img src={img2} alt='echart' className='img-galery__img' />
                    <figcaption className='img-galery__title'>Echart Example Lorem ipsum</figcaption>
                </figure>
                <figure className='img-galery__container'>
                    <img src={img3} alt='echart' className='img-galery__img' />
                    <figcaption className='img-galery__title'>Echart Example Lorem ipsum</figcaption>
                </figure>
            </section>
            <section>
                <h2>Lorem ipsum</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce scelerisque urna a neque fermentum, non bibendum neque sagittis. Vivamus auctor non erat nec pretium. Pellentesque iaculis, orci quis malesuada vehicula, est mauris porttitor mauris, a fermentum nisi quam ut lacus. Nam quis arcu ut justo tempor tincidunt. Phasellus vitae venenatis metus, sed laoreet dolor. Curabitur laoreet nec lorem nec condimentum. Sed molestie condimentum mauris a maximus.
                </p>
                <p>
                    Mauris quis lacinia neque. Nullam pharetra mi nisi, sed luctus dolor consequat suscipit. Cras tincidunt erat vel placerat bibendum. Etiam lacinia lectus ac risus dignissim feugiat. Sed volutpat egestas mauris non finibus. Etiam vitae scelerisque est. Pellentesque finibus, massa vel laoreet tempus, turpis mi porta turpis, ac posuere elit felis vitae lectus. Nulla aliquam, dolor a sagittis sollicitudin, nisi lacus sodales erat, vitae molestie velit velit ut ligula. Aenean in sem blandit, ultricies nisl sed, congue tellus. Fusce finibus facilisis ullamcorper. Phasellus vitae tempus augue. Duis in neque pulvinar, tempus massa sit amet, convallis ligula.
                </p>
                <p>
                    Nam luctus elementum fermentum. Duis volutpat dolor sem, ut pharetra leo scelerisque vel. Cras sodales dolor dolor, ut pellentesque tellus tincidunt at. Vivamus non nunc non urna bibendum dictum non sed odio. Sed porta sollicitudin bibendum. Sed nisi lectus, faucibus vitae varius eget, imperdiet vel sem. Vivamus tempus nisi nisl, et imperdiet massa vehicula a. Nulla ut quam id purus viverra venenatis.
                </p>
                <p>
                    Donec in mattis nisi, eget efficitur lacus. Duis tincidunt, diam tempus euismod varius, libero ligula blandit metus, eget fringilla nibh ligula et nisl. Nullam finibus augue a viverra congue. Donec eget lectus at nunc vestibulum dignissim sit amet in sapien. Vestibulum posuere nisi pretium tempus facilisis. Vivamus luctus, odio ut consequat tempor, odio arcu facilisis eros, vitae auctor orci leo et elit. Sed faucibus venenatis enim vitae semper. Phasellus venenatis ut justo eu pellentesque. Pellentesque id finibus ex. Nullam augue odio, aliquet vel est id, sodales vestibulum justo. Ut a mauris vel risus tristique porta vel et dolor.
                </p>
                <p>
                    Etiam porta vitae velit quis vehicula. Aliquam venenatis pharetra ante sed scelerisque. Curabitur id scelerisque turpis. Nullam nulla elit, posuere at orci vitae, blandit ultrices tellus. Nullam at accumsan odio. Suspendisse ullamcorper scelerisque lectus, quis sollicitudin lacus elementum ac. Etiam sed euismod nisl, vitae ullamcorper lorem. Integer diam lectus, ornare vel auctor feugiat, sodales ornare ex. Interdum et malesuada fames ac ante ipsum primis in faucibus. In nulla quam, mattis pharetra feugiat sed, sodales at felis. Sed varius ex et nisl lobortis semper. Praesent odio urna, dignissim ac ornare non, luctus eget urna.
                </p>
                <p>
                    Maecenas commodo semper purus, non iaculis augue porta sed. Quisque aliquet augue vitae feugiat eleifend. Suspendisse pharetra quam nec leo hendrerit dapibus. Nulla facilisi. Morbi justo eros, malesuada et vestibulum eu, mattis non sapien. Aliquam malesuada volutpat tellus, nec facilisis orci vestibulum ut. Phasellus egestas eros mi, a posuere urna condimentum at.
                </p>
                <p>
                    Duis commodo nisi sed sapien tempus elementum. Quisque sapien massa, congue ac commodo ac, maximus nec tortor. Integer feugiat justo nec vehicula finibus. Etiam at diam accumsan, placerat neque sit amet, dignissim sapien. Donec fringilla, dui quis efficitur efficitur, lectus elit vulputate nunc, sit amet maximus mauris eros a eros. Praesent molestie diam vel magna mattis sagittis. Suspendisse dolor ex, elementum sit amet ornare aliquet, sollicitudin ac nibh. Maecenas venenatis sapien et magna molestie fermentum.
                </p>
                <p>
                    Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam eget dui at diam rutrum pharetra non ac libero. Curabitur quis nisl cursus neque venenatis luctus. Curabitur ut bibendum est, a dictum nisl. Donec eget laoreet lacus. Nam enim lacus, feugiat et enim vitae, vestibulum viverra sapien. Quisque ut lectus in massa viverra venenatis vel in mauris. Nunc luctus, dui pretium mattis convallis, neque ante consequat arcu, nec gravida velit leo at odio. Phasellus malesuada felis non iaculis porta. In lacus ipsum, viverra quis lobortis in, pretium et quam. Donec sit amet neque vitae risus accumsan pharetra nec at mauris.
                </p>
                <p>
                    Sed viverra elit sed accumsan rhoncus. Vestibulum vitae arcu nunc. In dapibus vehicula convallis. Quisque velit lacus, mattis elementum sollicitudin in, maximus a magna. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aenean vel urna ut eros interdum ullamcorper eget quis turpis. Donec hendrerit facilisis magna vitae tincidunt. Proin aliquam efficitur magna, et pretium odio elementum at. Nulla facilisi. In hac habitasse platea dictumst. Curabitur in risus a est tincidunt fermentum. Ut accumsan ligula iaculis justo tristique imperdiet at id leo. Vestibulum in erat porttitor nisl luctus porttitor et vitae dolor. Mauris aliquet feugiat lacus, vitae vehicula augue mattis ut. Donec id varius risus. Etiam eget augue ligula.
                </p>
                <p>
                    In tempus, nisi feugiat aliquam maximus, risus augue ullamcorper massa, sed fringilla est metus eget nunc. Maecenas lacus risus, condimentum vitae erat vel, iaculis pretium sapien. Praesent felis nunc, hendrerit commodo vulputate vitae, posuere sed dui. Quisque iaculis euismod quam. Donec mi ipsum, tincidunt non lorem et, dapibus bibendum metus. Quisque mollis consectetur felis, a lacinia sem tincidunt nec. Suspendisse quis turpis et sem finibus consectetur eget in nisl. Nam sed mollis odio. Donec dapibus est nisi, id tempus quam mollis id. Suspendisse pellentesque lorem hendrerit sem semper, sit amet volutpat turpis congue. Integer sollicitudin semper justo, quis elementum libero pretium sit amet. Aliquam sit amet aliquet est. Aenean ligula turpis, placerat sed lacinia non, tempus eget purus.
                </p>
            </section>
        </>
    )
}

const mapStateToProps = state => (
    { pageTitle: state.pageTitle }
);

export default connect(mapStateToProps)(PageHome);