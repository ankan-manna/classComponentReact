/*
CONSTRUCTOR => i) A special function that will get called whenever a new component is created
             ii) it helps initializing state and binding the event handelers
             iii)Inside this we cannot make side effect like http request

SUPER       => i) This is base class constructor , we can oly use props if we
                  pass props inside super

getDerivedStateFromProps=>i)when the state of component depends on props,, when props change state should be change
                         ii) inside this we can call setState
                         iii) we cannot make ajax rquest
                        iv) it return either null or an object that return updated state

componetDidMount=> i) That will called only once in whole lifecycle of component it called immediately
                        after a component and its all child components have been rendered to DOM
                    ii) Intract with DOM /make ajax call to load data

shouldComponentUpdate =>i) It detects is the component re-render or not

getSnapshotBeforeUpdate => Called before the changes of virtual DoM that to be reflact in DOM
                            it can return null or some value which can take as parameter in componentDidUpdate

componentDidUpdate => Called after render iss finished in the re-render cycles // can make ajax call

componentWillUnmount =>i) called before a component unmounted and destroy
                        ii) cancelling any network req, removing event handelers etc

                        i)


    */