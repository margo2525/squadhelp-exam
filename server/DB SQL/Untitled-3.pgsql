// Вивести кількість юзерів за ролями 

SELECT role, count(*) as count_members
FROM public."Users"
GROUP BY role
ORDER BY role;

//Усім юзерам з роллю customer, які здійснювали замовлення в
//новорічні свята в період з 25.01 по 14.01, необхідно зарахувати
//по 10% кешбеку з усіх замовлень у цей період

//подсчитать сумму  пользователей с ролью «клиент»
//в таблице Конкурсы между датами
//2023-05-02 и 2023-06-14

//обновить баланс этих пользователей в таблице Пользователи добавляя 10% от их общей 
//суммы к их текущему балансу

//возвращает идентификатор, displayName,
//роль и обновленный баланс этих пользователей


WITH total_sums AS (
	 SELECT u.id as user_id, sum(cnt.prize) as sum_prize 
	  FROM "Users" as u
	  INNER JOIN "Contests" as cnt
	  		ON u.id = cnt."userId"
	  WHERE role = 'customer' AND cnt."createdAt" BETWEEN '2023-05-02' AND '2023-06-14'
	  GROUP BY u.id)
UPDATE public."Users" AS u
SET balance = balance + total_sums.sum_prize * 0.1
FROM total_sums WHERE u.id = total_sums.user_id
RETURNING id, "displayName", role, balance;


//Для ролі сreative необхідно виплатити 3-м юзерам з найвищим
//рейтингом по 10$ на їхні рахунки.

UPDATE public."Users"
SET balance = balance + 10
WHERE id IN (
	SELECT id
	FROM public."Users"
	WHERE role = 'creator'
	ORDER BY rating DESC
	LIMIT 3 OFFSET 0)
RETURNING id, "displayName", role, balance, rating;