function ContactUs() {
  return (
    <div className="reach">
      <hr />
      <h2 className="reachTitle">Reach Us</h2>
      <div className="reachContent">
        <div className="address">
          <div>
            <p>
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAFJklEQVR4Xu2bZ8j3UxjHP0/2Jgkpe6/sKFnJSDxGGaXIiIQoQlbZkRfIllkiEbJlvSCys/fIeEHJ3qMP537cz/38//8zf79b7vuqp+fF/xrf63vO75zrXOfcM5jiMmOK5880AdMzoF8GnHErAWsAywILh/DfAZ8DbwIfAn/2BauPT2BuYBdgH2AHYMlIcl8CDwK3AvcDv3VJRpcEmPghwEnA8oVJOBvOAa4Ffi/0MdKsKwI2AG4A1m8E+kXgAOCVRv5muemCgIOBy4B5G4P9GTgsENvMdUsC9HV6+NcM4ABHpwBntwrQkoATgXNbAYv4cV05r0WsVgTsB9zcAlCGj33DTpFhMqdqCwJWB14AFqpCkm/8PbAh8E6+6b8WtQRo/yiwTSYI9/bXQ/GjD4uitQC3zhx5HNiupnCqJWBP4PYMxG+FdeIO4NsJdosCe4W6YbUMn7sDd2Xoz6ZaQ4C2zwIbJwa/AHAF/yWiP18g6dhEv88Bm5XOghoCNgKeTwR5DHBRou6Y2nGApKWIg+A6lC01BJwPHJ8Q8VLgyAS9QSpXhOInZu6W6NaYLTUEOPVi0/9TwF3ih2xk/xh4WnSVXyZiL5ZNS2KUEmCZa1JzRYKeADhTauRk4KyIg1/DNuz/WVJKgKPqih6TVYD3Y0qR39cE3kjwsSrwXoLebCqlBGwFPBEJ9jWwROnqPM63GG2YLBiJtyXwZF8E7AzcFwn2LpCzn49yZ19ghUi8HYGH+iLADs89kWCCtv3VQj4Blos4stv0cG6wLj8BCx7PB7UtLQsj6/7Ygrs58ExfBDi1304ItgXwdILeKJWU9UZ7P5GPc2OVzoB5Qi3v6IySy4EjckFN0L869BZHuXGGeJb4IzdWKQHG8SS2dSSgn8HaJdtT8Ot2+yog4aPEb981IFtqCDgKuDghot+lx+WfEnTHq7jtudVukmB3OHBlgt4cKjUEOOX85hZLCHwvsHdGSezi6THbrS0mX4W2u7VCttQQYDB79qmHkJeBA4GXIig9X1wHrJeYzRk1jdhaApYOV1nzJ4L1ysvmxS1hy/os2LnHu43Z59st0Zdqnkdc/b1NKpJaAgzqcbd2pS8CH3oM9hqKpQUBKwKWvbFCpRjkEEMLLA9b2Xv/eH8tCNDfTcD+rTOM+PPqzTWlSloRsG4X93aRzKwvUo7JI920IsAgdwO7Vg1HuvGdwB7p6sM1WxJg3f9UC1AJPooOPoP8tiRA/ynlcUJ+I1UeC5chtX7+tm9NwE7hVUcTcEOcFDU+hgFqTYD+vCvwzq4Lsffv2aDZG6LWBJi0Nb/ve7oQfd/W0nEXBFgQ+drLLm1L8X7AC9Smb4W6IMCkDwWuapl98HlNY5/NF8ExfHaKPgjX3i0we2haGfCdUFPpagYIMudyM5aUvi6MKZX83iUBiwAfhcuREmxjNjY8PPJOfE9Q43OWbZcEGMRmxamVSM8ETqv0MdS8awKWCrNggcIEfgyj/0WhfdSsawIE4MOIo6NIBitcUmGbFLIPAnwn7K1t7gMoGx7WEq4jnUkfBAjeJmdu8+LG8D64s+R13BcBVnCvZcZbJzyl+18QYBI+jUttYtg59vlb59LXDDARn7Kl3t62uFRNIq9PAgT0SEIzw6bKtknoGyj1TcD2CY8YbKr4JzO9SN8EGO+BETe5Ju7zm2YNjxiLfRMgnsWB64GZE8B5GXoQ8E0MdMvfJ4OAMfz29V3sHG27yTZRepfJJKD3ZAcFnCbgPzEMkwhiys+AvwAgi79BOPKcYQAAAABJRU5ErkJggg=="
                alt="address"
                height="40px"
              />{" "}
              <span>123456</span>
            </p>

            <p>
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAABACAYAAABhspUgAAADp0lEQVRoQ+2ZWahNYRTHf1fmokiU4kF4kOHBGNE1vphfEEUUSmRKEsqQIbkoSULmIkVISUqmMpdSSJ5MLx64Edfc3/12dse5e6/97b3P7ep8L+dhr//6fnvts9e31toVNLBV0cB4KQPn/cTKES5HuCAC/8VfohEwHBgHDAF6AE2AucDRvB95nP/CCHcGzgB9iwg/At2Bt3FO87weBm4D3AG6RWy4F1iQJ1Cc7zDwcWBGjOAH0BN4Guc4r+sBcCVw1bjJOWCS0TZzswD4FjA4gfehwM0E9pmZCrgfcC+hx/vAQOBnQl1qcwFvA1Z4eJoDHPLQpZII+C7Q38PLe6AX8MpD6y0R8AegtaeH08AUT62XTMC/vJS1oi9AixT6xFIB1wBNEytrBYeB2Z5aL5mAnwNdPdSXXT7+7KH1lgj4BDA9oYeD7oj+mlCX2lzAs9yjtTj77kD3W4zzsBFwO1eBNY7Z4BswGbiYB4jVZ3A0qz6YECNaD6yzOs7LLgBW5FQHRy2dhtvzArH6DYCV1lSYt40QKpuotCz5ixZmCtfDewzF+SpgqzUaediFgXsDj2I2qfc2qbCnuwKMjIE+BUzLI3oWn4XAw4BrBqE6DmWWkq9ic4nzwPgYkndAH+BNqYmLAXcBHhuqsBvu76MDpWSrrsnPEmCngeIAMC9liWrY5q9JXcCa/lwCRhu8bQLWGOwyMYmarXUAHgIdDTttdtBpmgHDNsRO4NUZK2s0M3jzKTlbAvuAqYBe9qXAy6i9LNNLOTtpAJaJZhWyt2SP5q7yGxHyrf5S0EfqGiFYgOVvGVBlhFbK04t4NsJe+6q9mlmHzQNgebEzwQosvxsTvlzqqJVtikV7IbDbEIALwErgSWCbBFi2W5wDw15/TFR7KIvsCFV5E10pq0xkWRpAKn1u0M0nAZZz2auQX2vZKWTzAlBb1crdcFx3U8z9J1WTSYEDR3oxFLVSrxpfYIFq4qNPCJaUl9WNVacBFsQAlw0sh0sW0LfTAguiPXAMGJMFUYyPqiyAtYfe+EUui+Q5a6vMCjgIjErTXYZ62udhaOg+KGvgAESdi1LfKB+yIhodHKocX+cFHOypscB8N7uLGiFE3ZeO8MVAdXAQZBSESDeae4x1tYN+9WU1bqmQWg1cDxvmHeFiUIq0PgvrEetTRSfXjqlSe+YKHnXmqsX/WfUBHBfZyOtl4FThM4jLETYEKZVJOcKpwmcQlyNsCFIqk3KEU4XPIG5wEf4NYhWEHMro3bgAAAAASUVORK5CYII="
                alt="phone"
                height="40px"
              />{" "}
              <span>123456</span>
            </p>

            <p>
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAEc0lEQVR4Xu2aV6hURxjHf9bYsCFGjFgQBcFEHzQSVDSCxAaKPthbbCFqFGMXJQXUYBfFhl2JD8EEQQRBEJSgEhA1GAtE9MGGBWtijIX/MgPLYc7es3t39+49cz643Ic7d+b7/+frc6rguVTxHD8JAYkFeM5A4gKeG0ASBBMXSHOBhsB04AugGVA1Zu7xFrgFHAZ2Aq+Ez1pAB+A40CJmoMPg/AkMFCEioBZwAWjvCXgL8wrQRQR8DWz2DLyFu1QEnAR6eUrAZRHwGFAA9FH+FwHvfERuML8SAY+ARp6S8JcI+A0Y7CkBW0TAAOCopwR8KgL0cwL43DMSdOmDbCXYGjjvUTZ4CnQGbqQ3Q/2MK8StBwgatrLeEOBIei9gF00AdqX1CHH0imnAdgvM1Q6PAnYDNWOG/j9gMrA/HVfYPKArcBBoFxMS/gZGAueCeERAF+APB9C6wGrgq0pOgsz9W+C5A0eqG1Ql2B84GwJUdYLiwoeVjIh7wKQMNU434JjtBf4xi38OAdkE2AYMrSQkaOqjYPcgRN8R5lJrB5shBb/ZgPKky13GAJuA+iVKxDNghgl0riZPeq81l52C4OoGNTf70lSHLpytgD1A7xIjQXMNpfGbIXr1MdmtZTALhLXDuumFwAvHhiqWZCnLgQ8qmAilt8XAOkCDz6DUAVYCM116ljUPuA6MA86EgOwIHAA6VRAJFwG55aWQ8z8D9mZK52URoH3Fqhj8HhDbQZEF6G/zi1hBympXAcvseDuglHT6zuiUsbSPQoDdW5PjsRnY7gnsA9RYFVJuAOOBUyGHyBpV7X0cRYlsCNB+soClwBrgjeMARdmNRsEo52e7RsH3G0DRPijVgHnAD0CNqBtnS4Dd97SJDboNlwwzDUfjqIqUse4hMAX4NWRdG2N9PbI9L1cCdI5uYZZJia5M8pFJO32zVSqw/pjJ23cc+0j/icAGoF4u55SHAHuebmVqSNWlADTHpMvIZmk21tud0rDAuQhWdbrD9Pa5YE/9Tz4I0D53jd/rfdElmr4oQEYKTOapLlPA1fBGVaseccsl+SLAKrEeWAT869BK84W5wBJAxYlLXpogpnL1tWOB3jF/MoGwXMDtP+ebAO2rdDkcuBqiYXPTno5O6zDl3yqoVM25fF1b6QX7EPBJXpCbTQpBgLZW+azSU2krrNTW2SJDcruMdcoAsq7a+QSfzxgQptcvZqCiNJaLNDXptGAPN4WygHSw94EFpjpzFU8uYqqbzm4FoGhfMCkGAVb5a6YXl6+7OkytUy5X86XU2bZgqNM2LiYB9ljN5lTc/G6+2ZEO6tG7A0pvmkUWTSqCgKKBi3JQQoDnH0jkrRSOYm0luSZxgcQF/P5IKokBigGa7OQ0TSnJqJadUk9EgIYY5R1bZXds6axOPY6q/FRp6qP0tR9IaMytBsQn0WRpoSVAv/Wq+iPQIOYs6NtojeW2qgQIfiKjTkyvvurO9NAQJ9EsQi/HekXW7DElQQLiBDgSloSASDTFeJH3FvAezmfMIhau0CUAAAAASUVORK5CYII="
                alt="mail"
                height="40px"
              />
              {"   "}
              <span>abc@def.com</span>
            </p>
          </div>
        </div>
        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6862.358382683108!2d76.663461!3d30.685234!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x65ef2d487904b8f3!2sChandigarh%20Engineering%20College-Block%203%2C%20Wilson%20Block!5e0!3m2!1sen!2sus!4v1614437465176!5m2!1sen!2sus"
            width="400"
            height="240"
            style={{
              border: "none",
              overflow: "hidden",
              filter: "hue-rotate(180deg)",
            }}
            allowFullScreen=""
            scrolling="no"
            frameBorder="0"
            allow="encrypted-media"
            title="Chandigarh Engineering College"
            // loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
