# Methods Of Params 

# Positional Parameters
Parameters passed in a fixed order to a function

                            function sum(a: number, b: number) { ... }                 

# Default Parameters	
Parameters that use a default value if no value is passed during the function call

                              function greet(name = "Guest") { ... }

# Rest Parameters	
Parameters that allow multiple arguments to be passed as an array

                                function sum(...numbers: number[]) { ... }

# Destructuring Parameters	
Extracting values from an object or array and using them as function parameters

                                function display({name, age}) { ... }
                        
# Optional Parameters	
Parameters that are not mandatory for the function call

                                function greet(name?: string) { ... }

# Static Parameters	
Parameters that have fixed, predefined values and do not change at runtime

                                function add(a: number, b: number) { ... }


# Dynamic Parameters	
Flexible parameters that can change or vary at runtime, such as rest parameters
                                          function greet(name: string, ...others) { ... }
