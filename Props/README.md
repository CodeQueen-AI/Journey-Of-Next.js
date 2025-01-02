# Props 
Props (Short for properties) are readonly attributes in react used to pass data from a parent component to a child component They Allow components to be dynamic and reusable by accepting different inputs

# Syntax of the Props
# Passing Props (Parent Component)
                              <Child propName={value} />

# Receiving Props (Child Component):
                            function Child(props) {
                              return <div>{props.propName}</div>;
                            }
