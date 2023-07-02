const bunyan = require('bunyan');
const fs = require('fs');
const path = require('path');

// Копіюємо файл з помилками
const sourceFile = path.join(__dirname, 'errors.log');
const destinationFile = path.join(
  __dirname,
  `${new Date().toISOString().slice(0, 10)}.log`
);
fs.copyFileSync(sourceFile, destinationFile);

// Очищаємо файл з помилками
fs.writeFileSync(sourceFile, '');

// Трансформуємо вміст файлу перед записом у новий файл
const log = bunyan.createLogger({
  name: 'myapp',
  streams: [
    {
      level: 'info',
      type: 'raw',
      stream: {
        write (record) {
          const transformedRecord = {
            message: record.msg,
            code: record.err.code,
            time: record.time.getTime(),
          };
          fs.appendFileSync(
            destinationFile,
            JSON.stringify(transformedRecord) + '\n'
          );
        },
      },
    },
  ],
});

log.info({ err: new Error('some error') }, 'some message');
