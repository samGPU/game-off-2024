import stateManager from "../src/stores/stateManager";
import React, { useEffect } from "react";

export default function Interface() {

    /**
     * State manager
     */
    let phase = stateManager((state) => state.phase)

    useEffect(() => {
        const unsubscribeState = stateManager.subscribe(
          (state) => state.phase,
          (value) => {
            console.log('phase changes to', value)
            
          }
        )
    
        return () => {
          unsubscribeState()
        };
      }, []);

    if(phase === 'ready') {
        // Game is ready to start
        return (
            <>
                <div className="HUD">
                    <h1>{phase}</h1>
                </div>
            </>
        );
    } else if(phase === 'playing') {
        // Game is being played
        return (
            <>
                <div className="HUD">
                    <h1>{phase}</h1>
                </div>
            </>
        );
    } else if(phase === 'ended') {
        // Game has ended
        return (
            <>
                <div className="HUD">
                    <h1>{phase}</h1>
                </div>
            </>
        );
    } else if(phase === 'paused') {
        // Game is paused
        return (
            <>
                <div className="HUD">
                    <h1>{phase}</h1>
                </div>
            </>
        );
    }
}

