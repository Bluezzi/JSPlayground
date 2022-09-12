//Arithmetic

/*Arithmetic Operators
+   Addition
-   Subtraction
*   Mulitplication
**  Exponents
/   Division
%   Modulus (Division Remainder)
++  Increment
--  Decrement
*/

let x = 100 + 50;
let x = a + b;
let x = (100 + 50) * a;

//Operand   Operator    Operand
//100       +           50

//Adding (adds numbers)
let x = 5;
let y =2;
let z = x + y;

//Subtracting (Substracts numbers)
let x = 5;
let y = 2;
let z = x - y;

//Multiplying (Mulitplys numbres)
let x = 5;
let y = 2;
let z = x * y;

//Dividing (Divides numbers)
let x = 5;
let y = 2;
let z = x / y;

//Remainder (returns the division remainder)
let x = 5;
let y = 2;
let z = x % y;

//Incrementing (Increments numbers)
let x = 5;
x++;
let z = x;

//Decrementing (Decrements numbers)
let x = 5;
x--;
let z = x;

//Exponentiation (Raises number to the exponent)
let x = 5;
let z = x ** 2;
    //=25
    //x**y producers the same result as Math.pow(x,y)
let x = 5;
let z = Math.pow(x,2);
    //=25

//Operator Precedence 
let x = 100 + 50 * 3
    //=250
        //Multiplication and Division First
        //() can change the Order of Operations

/*Operator Precedence Values
    |Value| |Operator| |Description|   |Example|
        21	( )	    Expression grouping	(3 + 4)
        20	.	    Member	            person.name
        20	[]	    Member	            person["name"]
        20	()	    Function call	    myFunction()
        20	new	    Create	            new Date()
        18	++	    Postfix Increment	i++
        18	--	    Postfix Decrement	i--                      
        17	++	    Prefix Increment	++i
        17	--	    Prefix Decrement	--i
        17	!	    Logical not	        !(x==y)
        17	typeof	Type	            typeof x
        16	**	    Exponentiation  	10 ** 2
        15	*	    Multiplication	    10 * 5
        15	/	    Division	        10 / 5
        15	%	    Division Remainder	10 % 5
        14	+	    Addition	        10 + 5
        14	-	    Subtraction	        10 - 5     
        13	<<	    Shift left	        x << 2
        13	>>	    Shift right	        x >> 2
        13	>>>	    Shift right (unsigned)	x >>> 2    
        12	<	    Less than	        x < y 
        12	<=	    Less than or equal	x <= y
        12	>	    Greater than	    x > y
        12	>=	    Greater than or equal	x >= y
        12	in	    Property in Object	"PI" in Math
        12	instanceof	Instance of Object	instanceof Array          
        11	==	    Equal	            x == y
        11	===	    Strict equal	    x === y
        11	!=	    Unequal	            x != y
        11	!==	    Strict unequal  	x !== y          
        10	&	    Bitwise AND	        x & y
        9	^	    Bitwise XOR	        x ^ y
        8	|	    Bitwise OR	        x | y
        7	&&	    Logical AND	        x && y
        6	||	    Logical OR	        x || y
        5	??	    Nullish Coalescing	x ?? y
        4	? :	    Condition	        ? "Yes" : "No"                  
        3	+=	    Assignment	        x += y
        3	/=	    Assignment      	x /= y
        3	-=	    Assignment      	x -= y
        3	*=	    Assignment      	x *= y
        3	%=	    Assignment      	x %= y
        3	<<=	    Assignment      	x <<= y
        3	>>=	    Assignment      	x >>= y
        3	>>>=	Assignment      	x >>>= y
        3	&=	    Assignment      	x &= y
        3	^=	    Assignment      	x ^= y
        3	|=	    Assignment      	x |= y
        2	yield	Pause Function	    yield x
        1	,	    Comma	            5 , 6
*/
