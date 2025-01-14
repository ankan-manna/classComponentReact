/*
Regular Component => cannot implement shouldComponentUpdate method ,, it always returns true by default

Pure Component=> It implements shouldComponentUpadet Method with a shallow comparison of props/state

Shallow Comparison => i) Primitive-->is value and type  
                        ii) Complex -->is from same reference 

<<==>>> if parent is a pure component then all childs should be also pure to avoid unexpect behave and
        Never mutate(change) the state. Alawys return a new object with updation that reflects new state.
*/