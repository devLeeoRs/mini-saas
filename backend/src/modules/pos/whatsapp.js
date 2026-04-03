function normalizeDigits(value) {
  return String(value || '').replace(/\D+/g, '');
}

function parseBrWhatsappNumber(input) {
  const digits = normalizeDigits(input);
  if (!digits) return null;

  // Accept +55 / 55 prefix
  let local = digits;
  if (local.startsWith('55') && (local.length === 12 || local.length === 13)) {
    local = local.slice(2);
  }

  // Local: DDD (2) + phone (8 or 9)
  if (local.length !== 10 && local.length !== 11) return null;

  const ddd = Number(local.slice(0, 2));
  if (!Number.isInteger(ddd) || ddd < 11 || ddd > 99) return null;

  const phone = local.slice(2);
  if (phone.length !== 8 && phone.length !== 9) return null;

  const e164Digits = `55${local}`;
  return {
    country: 'BR',
    ddd: String(local.slice(0, 2)),
    local,
    e164Digits,
    e164: `+${e164Digits}`,
  };
}

module.exports = {
  normalizeDigits,
  parseBrWhatsappNumber,
};
