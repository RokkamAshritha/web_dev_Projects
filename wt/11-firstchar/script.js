function upper_case(str)
{
    regexp = /^[A-Z]/;
    if (regexp.test(str))
    {
        console.log("String's first character is uppercase");
    }
    else
    {
        console.log("String's first character is not uppercase");}
}
upper_case('Abcd');
upper_case('abcd');