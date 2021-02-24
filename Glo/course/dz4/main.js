/*
1) Сделать класс DomElement, который
содержит свойства
- selector,
  - height,
  - width,
  - bg,
  - fontSize
содержит метод, который создает элемент на странице в зависимости от условия:
- если строка selector начинается с точки, создаем div с классом
- если строка selector  начинается с решетки # то создаем параграф с id
пример:
  если передана строка '.block', то функция конструктор создает элемент с class="block"
если передана строка '#best', то функция конструктор создает элемент с id =best"
с помощью cssText задавать стили:
  - высотой - height,
  - шириной - width,
  - background - bg
  - размер текста fontSize
внутрь созданного блока записывать любой текст. Метод записи может быть любым.
2) Создать новый объект на основе класса DomElement
3) Вызвать его метод чтобы получить элемент на странице
 */