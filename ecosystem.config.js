module.exports = {
  apps: [
    {
      name:        'pedido-ferragem',
      script:      'index.js',
      cwd:         './backend',
      exec_mode:   'fork',
      instances:   1,
      autorestart: true,
      watch:       false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        PORT: 3001,
      },
      error_file:      './logs/pm2-err.log',
      out_file:        './logs/pm2-out.log',
      log_date_format: 'YYYY-MM-DD HH:mm:ss',
    },
  ],
};
