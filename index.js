function theBeatlesPlay(musicians,instruments)
{
  var array={}
  for(var i=0;i<musicians.length;i++)
  {
    array[i]=(`${i}:${musicians[i]} plays ${instruments[i]}`)
  }
  return array
}
