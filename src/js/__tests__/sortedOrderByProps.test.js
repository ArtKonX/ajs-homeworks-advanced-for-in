import orderByProps from '../sortedOrderByProps';

test('тест функции sortedOrderByProps', () => {
    const obj = { name: 'мечник', health: 10, level: 2, attack: 80, defence: 40 };

    const res = orderByProps(obj, ["name", "level"])

    expect(res).toEqual([
        {key: "name", value: "мечник"},
        {key: "level", value: 2},
        {key: "attack", value: 80},
        {key: "defence", value: 40},
        {key: "health", value: 10}
      ])
})