import React, {Component} from 'react';

class Card extends Component {

        render() {
            
            return (
    <div className='bg-white border rounded-lg overflow-hidden max-w-sm'>
        <img src='https://picsum.photos/400/400' alt='alt text' />
        <div className='p-6 text-gray-900'>
            <div className='text-gray-600 text-xs uppercase font-semibold tracking-wide'>Dec 15</div>
            <h3 className='font-semibold text-lg'>Elm Creek</h3>
            <div class="px-0 py-4 h-4 overflow-x-scroll inline">
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">Some Trails Open</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">A Skis</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">Maple Grove</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">Maple Grove</span>

            </div>
            <div className='text-gray-600'>Skied the Valley and Lake trails on classic skis. Valley Trail (snowmaking) was excellent. No tracks set on Lake Trail (natural snow), but by skiing in the soft snow at the edges of the packed trail, skis tracked pretty straight most of the time. No bare ground and few sticks or leaves.</div>

        </div>
    </div>
    );
    }
}
    export default Card;