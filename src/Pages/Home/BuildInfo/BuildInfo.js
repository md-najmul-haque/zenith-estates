import React from 'react';
import apartment1 from '../../../assets/apartment/apartment1.jpg'
import apartment2 from '../../../assets/apartment/apartment2.jpg'
import apartment3 from '../../../assets/apartment/apartment3.jpg'

const BuildInfo = () => {
    const porjects = [
        { id: 1, img: apartment1, title: 'Design quality', description: 'Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.' },
        { id: 1, img: apartment2, title: 'Energy efficiency', description: 'Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.' },
        { id: 1, img: apartment3, title: 'High comfort', description: 'Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.' }
    ]

    return (
        <div>
            <h2 className='text-6xl font-semibold text-center'>How we build our apartments?</h2>
            <p className='text-center'>Modern luxury and comfortable with competitive price</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    porjects.map(project =>

                        <div class="card w-96 bg-base-100">
                            <figure><img src={project.img} alt="Shoes" /></figure>
                            <div class="card-body">
                                <h2 class="card-title">{project.name}</h2>
                                <p>{project.description}</p>
                                <div class="card-actions justify-end">
                                    <button class="btn btn-primary">Talk to an expert</button>
                                </div>
                            </div>
                        </div>

                    )
                }
            </div>
        </div>
    );
};

export default BuildInfo;