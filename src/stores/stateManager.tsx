import { create } from 'zustand';
import { subscribeWithSelector } from 'zustand/middleware'

export default create(subscribeWithSelector((set) => {
    return {
        phase: 'ready',

        start: () => {
            set((state) => {
                if(state.phase === 'ready') {
                    console.log('set phase to playing')
                    return { phase: 'playing' };
                }
                return {};
            })
        },

        restart: () => {
            set((state) => {
                if(state.phase === 'playing' || state.phase === 'ended') {
                    console.log('set phase to ready')
                    return { phase: 'ready' }
                }
        
                return {}
            })
        },

        end: () =>{
            set((state) => {
                if(state.phase === 'playing') {
                    console.log('set phase to ended')
                    return { phase: 'ended' }
                }
                return {}
            })
        }
    };
}));
