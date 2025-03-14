# Pen4o’s Odyssey – Week 2
Guess the treasure door
Пенчо поема на своето пътешествие, минава през Магическия портал и се озовава в нов свят. Намира се в мистериозна стая с три врати. Една от тях крие златно съкровище, а останалите водят до неприятности. Помогнете на Пенчо и да се опита да отгатне вратата на благополучието!

Напишете функция, която приема потребителски избор (номер на избраната врата). Генерирайте на случаен принцип номера на вратата, зад която се крие златното съкровище. След това сравнете потребителския избор с номера на вратата със златото и съобщете на Пенчо каква е съдбата му.

Важно: Преди да направите сравненията, се убедете, че изборът на потребителя е валиден (той трябва да бъде номер 1, 2 или 3). В случай, че е допуснал грешка, го известете и прекратете изпълнението на функцията.

## Вход
1 число - номерът на вратата, която потребителят е избрал (и която Пенчо ще отвори).   
Изход
Ако номерът на избраната врата съвпада с номера на стаята със съкровището, отпечатайте на конзолата:   

“Congratulations, Pen4o! You found the treasure behind Door {номер на стаята}!”.   
Ако номерът на избраната врата НЕ съвпада с номера на стаята със съкровището, отпечатайте на конзолата:   

“A bucket of cold water splashes on you! Unlucky Pen4o!”.   
Ако въведеният от потребителя номер е невалиден, отпечатайте:   

“Invalid choice. Please select Door 1, 2, or 3.”   

След отпечатване на съобщението прекратете изпълнението на функцията.
## Примери
### Вход	
3
### Изход
Congratulations, Pen4o! You found the treasure behind Door 3!
(ако случайно генерираното число за номер на стаята със съкровището е 3)
### Вход
1
### Изход
A bucket of cold water splashes on you! Unlucky Pen4o!
(ако случайно генерираното число за номер на стаята е различно от 1)
### Вход
4
### Изход
Invalid choice. Please select Door 1, 2, or 3.