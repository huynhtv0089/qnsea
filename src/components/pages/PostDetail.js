import React from 'react';
import {Link} from 'react-router-dom';

class PostDetail extends React.Component {
    
    constructor(props) {
        super(props);
        console.log(this.props.match.params.path)
        this.state = {
            detail: data[this.props.match.params.path]
        }
    }

    componentDidMount() {
        //Go to the top page
        window.scrollTo(0, 0);
    }

    render () {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-9 blog-main">
                        <div className="mb-4 font-italic border-bottom">
                            <ol className="breadcrumb bg-white pb-0">
                                <li className="breadcrumb-item"><Link to="!#">Home</Link></li>
                                <li className="breadcrumb-item"><Link to="!#">Library</Link></li>
                                <li className="breadcrumb-item active" aria-current="page">Data</li>
                            </ol>
                        </div>

                        <div className="blog-post">
                            <h2 className="blog-post-title">{this.state.detail.name}</h2>
                            <p className="blog-post-meta">January 1, 2014 by <Link to="!#">Mark</Link></p>

                            <p>This blog post shows a few different types of content that’s supported and styled with Bootstrap. Basic typography, images, and code are all supported.</p>
                            <hr />
                            <p>Cum sociis natoque penatibus et magnis <Link to="!#">dis parturient montes</Link>, nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum.	</p>
                            <blockquote>
                                <p>Curabitur blandit tempus porttitor. <strong>Nullam quis risus eget urna mollis</strong> ornare vel eu leo. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
                            </blockquote>
                            <p>Etiam porta <em>sem malesuada magna</em> mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.</p>
                            <h2>Heading</h2>
                            <p>Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                            <h3>Sub-heading</h3>
                            <p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                            <pre><code>Example code block</code></pre>
                            <p>Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa.</p>
                            <h3>Sub-heading</h3>
                            <p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
                            <ul>
                                <li>Praesent commodo cursus magna, vel scelerisque nisl consectetur et.</li>
                                <li>Donec id elit non mi porta gravida at eget metus.</li>
                                <li>Nulla vitae elit libero, a pharetra augue.</li>
                            </ul>
                            <p>Donec ullamcorper nulla non metus auctor fringilla. Nulla vitae elit libero, a pharetra augue.</p>
                            <ol>
                                <li>Vestibulum id ligula porta felis euismod semper.</li>
                                <li>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</li>
                                <li>Maecenas sed diam eget risus varius blandit sit amet non magna.</li>
                            </ol>
                            <p>Cras mattis consectetur purus sit amet fermentum. Sed posuere consectetur est at lobortis.</p>
                        </div>

                        <div className="blog-post">
                            <h2 className="blog-post-title">Another blog post</h2>
                            <p className="blog-post-meta">December 23, 2013 by <Link to="!#">Jacob</Link></p>

                            <p>Cum sociis natoque penatibus et magnis <Link to="!#">dis parturient montes</Link>, nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum.</p>
                            <blockquote>
                                <p>Curabitur blandit tempus porttitor. <strong>Nullam quis risus eget urna mollis</strong> ornare vel eu leo. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
                            </blockquote>
                            <p>Etiam porta <em>sem malesuada magna</em> mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.</p>
                            <p>Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                        </div>

                        <div className="blog-post">
                            <h2 className="blog-post-title">New feature</h2>
                            <p className="blog-post-meta">December 14, 2013 by <Link to="!#">Chris</Link></p>

                            <p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
                            <ul>
                                <li>Praesent commodo cursus magna, vel scelerisque nisl consectetur et.</li>
                                <li>Donec id elit non mi porta gravida at eget metus.</li>
                                <li>Nulla vitae elit libero, a pharetra augue.</li>
                            </ul>
                            <p>Etiam porta <em>sem malesuada magna</em> mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.</p>
                            <p>Donec ullamcorper nulla non metus auctor fringilla. Nulla vitae elit libero, a pharetra augue.</p>
                        </div>

                        <nav className="blog-pagination">
                            <Link className="btn btn-outline-primary float-left" to="!#">Older</Link>
                            <Link className="btn btn-outline-secondary float-right" to="!#" tabindex="-1" aria-disabled="true">Newer</Link>
                        </nav>
                    </div>
                    
                    <aside className="col-md-3 blog-sidebar">
                        <div className="p-4">
                            <h4 className="font-italic">Archives</h4>
                            <ol className="list-unstyled mb-0">
                                <li><Link to="!#">March 2014</Link></li>
                                <li><Link to="!#">February 2014</Link></li>
                                <li><Link to="!#">January 2014</Link></li>
                                <li><Link to="!#">December 2013</Link></li>
                                <li><Link to="!#">November 2013</Link></li>
                                <li><Link to="!#">October 2013</Link></li>
                                <li><Link to="!#">September 2013</Link></li>
                                <li><Link to="!#">August 2013</Link></li>
                                <li><Link to="!#">July 2013</Link></li>
                                <li><Link to="!#">June 2013</Link></li>
                                <li><Link to="!#">May 2013</Link></li>
                                <li><Link to="!#">April 2013</Link></li>
                            </ol>
                        </div>

                        <div className="p-4">
                            <h4 className="font-italic">Elsewhere</h4>
                            <ol className="list-unstyled">
                                <li><Link to="!#">GitHub</Link></li>
                                <li><Link to="!#">Twitter</Link></li>
                                <li><Link to="!#">Facebook</Link></li>
                            </ol>
                        </div>
                    </aside>
                </div>
            </div>
        )
    }
}

const data = {
    'eo-gio': {
        name: 'Eo gio',
        info: '',
        desc: '',
    },
    'ky-co': {
        name: 'Ky co',
        info: '',
        desc: '',
        releative: {}
    },
    'bai-tam-hoang-hau': {
        name: 'Bai tam hoang hau',
        info: '',
        desc: '',
        releative: {}
    },
    'thap-banh-it': {
        name: 'Thap banh it',
        info: '',
        desc: '',
        releative: {}
    }
}

export default PostDetail