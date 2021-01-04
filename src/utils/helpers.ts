import { ChartData } from "../types";
import { ProjectType } from "../types/project";

export function getURIParams(params: { [key: string]: string | undefined }) {
  return Object.keys(params).reduce((prev, cur) => {
    return params[cur]
      ? prev + (prev ? "&" : "") + `${cur}=${params[cur]}`
      : prev;
  }, "");
}

export function queryToObject(query: string) {
  return query.split("&").reduce((prev, cur) => {
    const [key, value] = cur.split("=");

    return {
      ...prev,
      [key]: value,
    };
  }, {});
}

export function getHashParams() {
  return queryToObject(window.location.hash.replace("#", ""));
}

export function queryToJSON(queryString: string) {
  return JSON.stringify(queryToObject(queryString));
}

export function digitFormat(num: number) {
  return String(num)
    .replace(/(\s)+/g, "")
    .replace(/(\d{1,3})(?=(?:\d{3})+$)/g, "$1 ");
}

export function plural(
  num: number,
  text5: string,
  text1: string,
  text2: string
) {
  let text;

  if (num < 0) {
    num = num * -1;
  }

  num = num % 100;

  if (num >= 5 && num <= 14) {
    text = text5;
  } else {
    num = num % 10;

    if (!num || num >= 5) {
      text = text5;
    } else if (num >= 2) {
      text = text2;
    } else {
      text = text1;
    }
  }

  return text;
}

export function getTimeFormated(hour: number, min: number) {
  const hourFormated = hour < 10 ? "0" + hour : hour;
  const minFormated = min < 10 ? "0" + min : min;

  return hourFormated + ":" + minFormated;
}

export function getOS() {
  let osName = "UnknownOS";
  const userAgent = navigator.userAgent.toLowerCase();

  if (userAgent.indexOf("win") !== -1) osName = "Windows";
  if (userAgent.indexOf("mac") !== -1) osName = "MacOS";
  if (userAgent.indexOf("x11") !== -1) osName = "UNIX";
  if (userAgent.indexOf("linux") !== -1) osName = "Linux";

  return osName;
}

export function getAuthParams() {
  let rParams: { [key: string]: string } = {};

  window.location.search
    .slice(1)
    .split("&")
    .forEach((value) => {
      let param = value.split("=");

      rParams[param[0]] = param[1];
    });

  return rParams;
}

export function parseHashData(hash: string) {
  return hash
    ? decodeURIComponent(hash)
        .split("&")
        .reduce((prev, cur) => {
          const [key, value] = cur.split("=");

          return {
            ...prev,
            [key]: value,
          };
        }, {})
    : {};
}

export function calculateProjectStat(project: ProjectType): ChartData {
  let stepsCount = 0;
  const notStarted: number[] = [];
  const inProgress: number[] = [];
  const ready: number[] = [];
  const labels: string[] = [];

  if (project && project.tasks && project.tasks.length > 0) {
    project.tasks.forEach((task) => {
      let readyNumber = 0;
      let inProgressNumber = 0;
      let notStartedNumber = 0;

      labels.push(task.name);

      stepsCount += task.steps.length;

      task.steps.forEach((step) => {
        switch (step.status) {
          case 0:
            notStartedNumber++;
            break;
          case 1:
            inProgressNumber++;
            break;
          case 2:
            readyNumber++;
            break;
        }
      });

      notStarted.push(notStartedNumber);
      inProgress.push(inProgressNumber);
      ready.push(readyNumber);
    });

    console.log("stat", {
      data: { notStarted, inProgress, ready },
      labels: labels,
    });
  }

  return { data: { notStarted, inProgress, ready }, labels: labels };
}
